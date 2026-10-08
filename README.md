# Aiku Player v4

Netflix-style browser video player for direct media URLs.

## Features
- MP4/WebM/native browser playback
- HLS `.m3u8` via hls.js with quality and alternate audio tracks
- Vercel streaming proxy fallback with Range requests
- Play/pause, seek, 10s skip, volume, speed, fullscreen, PiP
- Fit / Fill / 100–300% zoom, pinch zoom and pan
- Subtitle/caption menu: HLS subtitle tracks, remote WebVTT URL, local `.vtt` file
- Audio/language selector for HLS alternate audio tracks
- Chapters menu when a chapters text track is supplied
- Cinema mode, screen lock, resume position, keyboard shortcuts
- Mobile double-tap seeking and center fullscreen gesture

## Deploy
Deploy the `Aiku-Player` directory to Vercel as a static site. The `/api/proxy` function is used automatically when a direct media request fails.

## Subtitle URL
You can preload a WebVTT subtitle with:
`?url=VIDEO_URL&sub=SUBTITLE_VTT_URL&subLabel=English`

Remote subtitle files must allow browser access (CORS), or the browser will block them.
