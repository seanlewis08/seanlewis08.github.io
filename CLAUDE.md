# Project: seanlewis08.github.io

Quarto blog hosted on GitHub Pages. Output renders to `docs/` directory.

## Writing Style Rules

- **No em-dashes.** Never use `--` or `---` as punctuation in prose. Use commas, colons, semicolons, or parentheses instead. The only acceptable uses of dashes are markdown horizontal rules (`---` on its own line), markdown table separators (`|---|---|`), mermaid diagram arrows (`-->`), and code syntax.
- For page ranges in references, use a proper Unicode en-dash character (`–`), not `--`.

## Blog Post Structure

- Posts live in `posts/<slug>/index.qmd` with an SVG thumbnail.
- New posts that are under review get salmon (`#FA8072`) backgrounds via CSS `:has()` selectors in `styles.css`.
- PDFs are hosted in `papers-hosted/` with clean URL filenames.
- After adding posts, run `quarto render` locally to rebuild `docs/`.

## Site Theme

- Accent: `#0d7c5f`, Purple: `#6d5acd`, Coral: `#d4563a`
- Fonts: Plus Jakarta Sans (headings), IBM Plex Sans (body), JetBrains Mono (code)
