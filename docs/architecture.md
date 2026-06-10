# Architecture Reference

> Read this file when working on the HTML/JS structure, navigation, design system, deployment, or file layout. CLAUDE.md points here.

## Tech Stack

- **Language**: Vanilla HTML, CSS, JavaScript - no frameworks, no build step
- **Architecture**: Single self-contained HTML file (`index.html`, formerly `index.html`)
- **Fonts**: Google Fonts CDN (Fraunces, Inter, JetBrains Mono)
- **State/Storage**: localStorage (browser-side, key: `courseProgress`)
- **Database**: None - all content is embedded in the JS `courseData` object
- **Hosting target**: Netlify or GitHub Pages (static file hosting)
- **Source content**: `Claude Code Course.docx` (189-page source document, converted to markdown via Pandoc for processing)

## Single-File SPA

Everything lives in `index.html`:
- CSS styles (embedded in `<style>`)
- Course content (in the `courseData` JavaScript object)
- Rendering engine and navigation (in `<script>`)

## courseData Structure

```javascript
courseData.modules[] -> lessons[] -> sections[]
```
Section types: `text`, `heading`, `list`, `code`

## Navigation Behavior

- Homepage shows module tiles (cards). Clicking a tile goes directly to the first lesson in that module - no intermediate tile view.
- Sidebar always shows all modules with all their lessons expanded, so users can see and jump to any lesson from anywhere.
- Top of lesson: subtle text link navigation (Previous/Next) in muted gray (#968F86, 13px)
- Bottom of lesson: full button navigation (Previous/Next)
- First lesson of first module: no Previous button
- Last lesson of last module: no Next button

## Progress Tracking

- Uses localStorage under key `courseProgress`
- Tracks module completion and exercise checkbox state
- Progress is per-browser, per-origin (local file progress won't carry to deployed URL)

## Design System

### Colors
- Background: #1A1815, Surface: #242220, Elevated: #2E2B28
- Sidebar: #1F1D1B, Border: #3A3633
- Accent (terracotta): #E8915A
- Success (green): #7FB069
- Text: #F0EBE3 (primary), #C4BEB5 (body), #968F86 (muted)

### Typography
- Headings: Fraunces (serif, 700/800 weight)
- Body/UI: Inter (sans-serif, 400/500/600)
- Code: JetBrains Mono (monospace, 400/500)
- All loaded via Google Fonts CDN

### Component Patterns
- Code blocks: dark bg (#131211), terminal header bar, copy button
- Conversation blocks: user avatar (terracotta circle) + Claude avatar (dark with diamond)
- Exercise cards: green-themed (#7FB069), checkboxes with localStorage persistence
- Community tip cards: golden-themed (#C4956A), star icon

## Deployment

- Target: Netlify or GitHub Pages
- Single static file, no build step
- Audience: Go2Go Skool community members (non-technical, accessing via URL)
- To deploy: upload `index.html` to static hosting. No build commands, no dependencies to install.

## File Structure

```
index.html                    -- The complete interactive course (single file, ~680KB)
Claude Code Course.docx       -- Original source document (189 pages)
CLAUDE.md                     -- This file (project conventions for Claude)
README.md                     -- Project overview and documentation
design/
  design-spec.md              -- Full design system spec
  reference-homepage.jsx      -- JSX reference for homepage layout
  reference-module-view.jsx   -- JSX reference for sidebar + content layout
  reference-content-blocks.jsx -- JSX reference for content block components
```

## Testing Checklist

After any content changes, verify:
1. `node -e` syntax check passes on the script block (see validator command in CLAUDE.md)
2. No escaped characters visible in rendered text (backslashes, dollar signs, tildes)
3. No em-dashes anywhere
4. All 8 modules and their lessons render
5. Navigation works (home -> module -> lessons -> next/prev)
6. Sidebar shows all lessons for all modules
7. First lesson has no Previous button, last lesson has no Next button
