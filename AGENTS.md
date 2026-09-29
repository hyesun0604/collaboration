# Base44 Dev Environment

## Project type
Static HTML site (single `index.html` at repo root). No backend, no build step, no dependencies.

## Running
`docker compose -f docker-compose.base44.yml up -d` — serves `index.html` via nginx on host port 3000. The repo root is bind-mounted read-only into the container, so edits to `index.html` are picked up on browser refresh.

## Live reload
There is no framework hot-reload (plain static site). After editing `index.html`, call `reload_preview` so the user sees the change.

## Secrets
None required.
