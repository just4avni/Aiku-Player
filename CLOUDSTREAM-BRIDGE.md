# AikuStream CloudStream Bridge Contract

AikuStream's web host can discover CloudStream `repo.json` / `plugins.json` directly in the browser. Compiled `.cs3` files are Android/Kotlin bytecode and are intentionally not executed in the browser.

To execute arbitrary CloudStream providers, run a compatible host/runtime separately and configure its HTTPS base URL in **Extensions → CloudStream compatibility bridge**.

## Endpoints

### GET `/health`
Returns JSON, for example:

```json
{"ok":true,"version":"1.0"}
```

### POST `/repo`
Body:

```json
{"url":"https://example.com/repo.json"}
```

The bridge may download/install/validate the repository and return provider metadata.

### POST `/search`
Body:

```json
{
  "query":"one piece",
  "providers":[
    {"id":"AnimeSugeProvider","internalName":"AnimeSugeProvider","name":"AnimeSuge"}
  ]
}
```

Response:

```json
{"results":[
  {"id":"...","title":"...","poster":"...","provider":"...","url":"..."}
]}
```

### POST `/load`
Body:

```json
{"item":{"id":"...","url":"...","provider":"..."}}
```

Return a CloudStream-style normalized detail object:

```json
{"title":"...","poster":"...","description":"...","episodes":[]}
```

### POST `/links`
Body:

```json
{"item":{"id":"...","url":"...","provider":"..."}}
```

Response:

```json
{"links":[
  {"name":"Server 1","url":"https://.../master.m3u8","quality":"1080p","headers":{"Referer":"https://.../"}}
]}
```

AikuStream then hands the returned URL to its existing player.

## Security

A bridge is executable code. Only point AikuStream at a bridge you trust. The bridge should enforce an allowlist/SSRF policy, validate repository/plugin downloads, and never expose arbitrary local-network access to an untrusted browser.
