# Aiku Player

Deploy the `Aiku-Player` folder to Vercel as a static/Other project.

## What this build does
- Native HTML5 video playback
- MP4/WebM and browser-supported codecs
- HLS `.m3u8` through HLS.js
- Automatic Range-aware `/api/proxy` fallback when a direct media URL fails
- HLS requests can also be routed through the proxy
- Seeking, buffering, volume, speed, fullscreen and PiP controls

## Important
The proxy can solve many CORS/hotlink/Range problems, but it cannot turn a webpage URL into a video file or decode unsupported codecs. For reliable playback, use a direct media URL, preferably H.264/AAC MP4.
