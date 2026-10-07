# 0ADJS Player — Vercel Fixed Build

Import this folder/repository into Vercel.
Framework preset: Other.
Build command: empty.
Output directory: empty.

The player is served directly from `/`.

Use:
https://YOUR-DOMAIN.vercel.app/?url=ENCODED_VIDEO_URL

The source must be a browser-playable direct video URL. A source can fail if it blocks hotlinking/CORS, is not a direct media URL, or does not support byte-range requests.

Vercel cannot force-cache video bytes hosted on another domain from a static page.
