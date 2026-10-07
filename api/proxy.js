export const config = { runtime: 'edge' };

function blockedHost(host) {
  host = host.toLowerCase();
  return host === 'localhost' ||
    host === '0.0.0.0' ||
    host === '::1' ||
    host.endsWith('.local') ||
    /^127\./.test(host) ||
    /^10\./.test(host) ||
    /^192\.168\./.test(host) ||
    /^169\.254\./.test(host) ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(host);
}

export default async function handler(request) {
  const reqUrl = new URL(request.url);
  const raw = reqUrl.searchParams.get('url');
  if (!raw) return new Response('Missing url', { status: 400 });

  let target;
  try { target = new URL(raw); } catch { return new Response('Invalid url', { status: 400 }); }
  if (!/^https?:$/.test(target.protocol) || blockedHost(target.hostname)) {
    return new Response('Blocked target', { status: 403 });
  }

  const headers = new Headers();
  const range = request.headers.get('range');
  if (range) headers.set('range', range);
  headers.set('accept', request.headers.get('accept') || '*/*');
  headers.set('user-agent', request.headers.get('user-agent') || 'Mozilla/5.0 AikuPlayer/2.0');
  headers.set('accept-encoding', 'identity');

  let upstream;
  try {
    upstream = await fetch(target.toString(), { headers, redirect: 'follow' });
  } catch (e) {
    return new Response('Upstream fetch failed: ' + (e?.message || 'network error'), { status: 502 });
  }

  const out = new Headers();
  const copy = ['content-type','content-length','content-range','accept-ranges','cache-control','etag','last-modified','content-disposition'];
  for (const h of copy) { const v = upstream.headers.get(h); if (v) out.set(h, v); }
  out.set('access-control-allow-origin','*');
  out.set('access-control-expose-headers','Content-Length,Content-Range,Accept-Ranges,Content-Type,ETag,Last-Modified');
  out.set('cross-origin-resource-policy','cross-origin');
  return new Response(upstream.body, { status: upstream.status, statusText: upstream.statusText, headers: out });
}
