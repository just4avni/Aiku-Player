# AikuStream

A browser media center with a CloudStream-style repository/provider host and the Aiku player.

## CloudStream repositories

Paste any public CloudStream `repo.json` or `plugins.json` URL in **Extensions → Add repository**. AikuStream resolves `manifestVersion`, `pluginLists`, plugin metadata, icons, authors, versions, languages and tvTypes, and persists the repository/provider registry in browser localStorage.

## Important `.cs3` limitation

CloudStream `.cs3` packages are compiled Android/Kotlin plugins. A normal browser cannot execute them directly. AikuStream therefore separates repository discovery from plugin execution. To make `.cs3` providers actually run, configure a compatible CloudStream runtime/bridge in **Extensions → CloudStream compatibility bridge**.

See `CLOUDSTREAM-BRIDGE.md` for the exact HTTP contract.

## Local data

Favorites, history, continue-watching, repositories, provider state and settings are stored locally in the browser. Use Export/Import in Settings for backup.

## Player

The existing Aiku player remains responsible for HLS, subtitles, audio tracks, chapters, zoom, fullscreen, PiP, range/proxy loading and browser FFmpeg compatibility conversion.
