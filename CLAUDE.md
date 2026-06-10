# Claude Code Course Project

> This file holds the permanent rules that apply every session. Architecture, design system, and current build state live in `docs/` and are read on demand. Pointers are at the bottom of this file.

## Convex Project ID

`kd773pd2h1rbc3wa2fj22rdphd83trzp` (Learning area) -- link all notes and tasks here.

## Project Overview

Two parallel purposes live in this folder:

1. **Go2Go's course** -- An interactive HTML course for the Go2Go Skool community teaching non-technical professionals how to use Claude Code. Single self-contained `index.html`, no build step.

2. **Pam's certification study** -- This folder is also where Pam works toward the Anthropic Claude Certified Architect, Foundations certification (Goda Go's cohort, July 1 2026 first-batch deadline). Pam's positioning lane: Workplace AI Adoption and Training. The 4 required Anthropic Academy courses are tracked on the Life at a Glance dashboard under Continuing Education > Claude Certified Architect tab.

## Content Rules - CRITICAL (course build)

### Preserve the Author's Voice
- This is Go2Go's course. **Never** summarize, condense, paraphrase, or rewrite her content.
- Every word from the source document must appear in the course. Do not take creative liberties.
- When adding new content from her documents, include it verbatim after cleaning formatting artifacts.

### No Em-Dashes
- Do **not** use em-dashes (the long dash character). They are not on a standard keyboard and look weird to readers.
- Use a regular hyphen (-) instead. If the source document has em-dashes, convert them to hyphens.
- This applies everywhere: content text, headings, descriptions, comments.

### No Escaped Characters in Rendered Text
- Apostrophes must render as apostrophes, not as `\'` or `\\'`
- Dollar signs must render as `$`, not as `\$`
- Tildes must render as `~`, not as `\~`
- Quotes must render as quotes, not as `\"`

### Clean Up Formatting Artifacts
- The source .docx was converted via Pandoc, which wraps text in `**bold**` markers, uses `---` for dashes, and adds `>` for indented continuation lines.
- Always strip these artifacts when processing source content.

## Known Pitfalls (course build)

### Pandoc Markdown Parsing
- Nearly all text is wrapped in `**bold**` markers - these must be stripped
- `---` within text means a dash, not a horizontal rule
- `>` indented lines within list items are continuation lines, not blockquotes
- Lines wrap mid-sentence - join them into paragraphs

### JavaScript String Escaping
- Apostrophes in content strings must be `\'` (single backslash + quote), never `\\\'` (double backslash + quote)
- The triple-escape bug (`\\\'`) renders as a visible `\'` in the browser. This broke 665 apostrophes in an earlier build.
- `\$` and `\~` from Pandoc must be cleaned to `$` and `~`
- After any content changes, run the syntax validator:
```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/);
try { new Function(match[1]); console.log('PASS'); } catch(e) { console.log('FAIL:', e.message); }
"
```

### Content Summarization
- The first build condensed Go2Go's detailed descriptions into terse bullet points. This is unacceptable.
- Example of what went wrong: "Claude Code runs on your computer, inside your terminal..." became "Claude Code: terminal application with file, bash, and search access"
- Always preserve the full original text.

---

## Operational Pointers (read on demand)

| When you're about to... | Read this first |
|---|---|
| Work on HTML/JS structure, navigation, design system, deployment, or file layout | `docs/architecture.md` |
| Check what's done, in progress, or remaining on the course build | `docs/current-state.md` |
