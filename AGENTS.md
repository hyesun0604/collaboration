# AGENTS.md

## Project Overview

Plain static HTML site — a single `index.html` with no framework, no build step, and no package.json.

## Running the app

```bash
docker compose -f docker-compose.base44.yml up -d
```

Serves `index.html` on port 3000 via nginx. The repo root is bind-mounted read-only, so edits to `index.html` are reflected on the next request (no restart needed). Call `reload_preview` after edits so the browser fetches fresh content.

## Known issue: directory permissions

The sandbox repo root defaults to `700` (`drwx------`), which blocks nginx's non-root worker from reading files (403 Forbidden). Fix with `chmod 755 .` from the repo root if the container returns 403.

## No secrets required

This project has no external dependencies or secrets.
