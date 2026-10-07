# 0ADJS Player — Vercel

## Deploy
1. Upload this folder to GitHub.
2. Import the repository into Vercel.
3. Deploy with the default settings.

The player is served from `public/index.html`.

## Player URL
Pass a direct source as:

`https://YOUR-DOMAIN.vercel.app/?url=VIDEO_URL`

## Local browser data
The player stores resume positions locally in `localStorage`. It does not upload those positions to the server.

## Important caching limitation
A Vercel static page cannot force the browser to cache a third-party video's bytes. Video caching is controlled by the browser and the video's source server/CDN.

For real video chunk caching, the source must support HTTP Range requests and suitable cache headers, or the video should be served through a controlled CDN/proxy.
