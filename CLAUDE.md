# CLAUDE.md - Claude Code Course Project

## Convex Project ID
`kd773pd2h1rbc3wa2fj22rdphd83trzp` (Learning area) -- link all notes and tasks here.

## Project Overview

This is an interactive HTML course for the Go2Go Skool community, teaching professionals how to use Claude Code. The course was written by Go2Go. The HTML implementation renders her content as a single-page application.

The audience is non-technical professionals (consultants, project managers, freelancers, business owners) who access the course via a URL. They will not clone repos or install anything.

## Tech Stack

- **Language**: Vanilla HTML, CSS, JavaScript - no frameworks, no build step
- **Architecture**: Single self-contained HTML file (`claude-code-course.html`)
- **Fonts**: Google Fonts CDN (Fraunces, Inter, JetBrains Mono)
- **State/Storage**: localStorage (browser-side, key: `courseProgress`)
- **Database**: None - all content is embedded in the JS `courseData` object
- **Hosting target**: Netlify or GitHub Pages (static file hosting)
- **Source content**: `Claude Code Course.docx` (189-page source document, converted to markdown via Pandoc for processing)

## Content Rules - CRITICAL

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
- When working with JavaScript strings inside single quotes, use `\'` for apostrophes in the source code, but verify they render cleanly in the browser.

### Clean Up Formatting Artifacts
- The source .docx was converted via Pandoc, which wraps text in `**bold**` markers, uses `---` for dashes, and adds `>` for indented continuation lines.
- Always strip these artifacts when processing source content.

## Architecture

### Single-File SPA
Everything lives in `claude-code-course.html`:
- CSS styles (embedded in `<style>`)
- Course content (in the `courseData` JavaScript object)
- Rendering engine and navigation (in `<script>`)

### courseData Structure
```javascript
courseData.modules[] -> lessons[] -> sections[]
```
Section types: `text`, `heading`, `list`, `code`

### Navigation Behavior
- Homepage shows module tiles (cards). Clicking a tile goes directly to the first lesson in that module - no intermediate tile view.
- Sidebar always shows all modules with all their lessons expanded, so users can see and jump to any lesson from anywhere.
- Top of lesson: subtle text link navigation (Previous/Next) in muted gray (#968F86, 13px)
- Bottom of lesson: full button navigation (Previous/Next)
- First lesson of first module: no Previous button
- Last lesson of last module: no Next button

### Progress Tracking
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
- To deploy: upload `claude-code-course.html` to static hosting. No build commands, no dependencies to install.

## Things to Avoid - Known Pitfalls

### Pandoc Markdown Parsing
The source .docx converted to markdown has quirks that caused bugs in earlier builds:
- Nearly all text is wrapped in `**bold**` markers - these must be stripped
- `---` within text means a dash, not a horizontal rule
- `>` indented lines within list items are continuation lines, not blockquotes
- Lines wrap mid-sentence across multiple lines - join them into paragraphs
- If you process the markdown programmatically, test the output for `**` artifacts in the rendered HTML

### JavaScript String Escaping
- Apostrophes in content strings must be `\'` (single backslash + quote), never `\\\'` (double backslash + quote)
- The triple-escape bug (`\\\'`) renders as a visible `\'` in the browser. This broke 665 apostrophes in an earlier build.
- `\$` and `\~` from Pandoc must be cleaned to `$` and `~`
- After any content changes, always run the syntax validator:
```bash
node -e "
const fs = require('fs');
const html = fs.readFileSync('claude-code-course.html', 'utf8');
const match = html.match(/<script>([\s\S]*?)<\/script>/);
try { new Function(match[1]); console.log('PASS'); } catch(e) { console.log('FAIL:', e.message); }
"
```

### Content Summarization
- The first build condensed Go2Go's detailed product descriptions into terse bullet points. This is unacceptable.
- Example of what went wrong: "Claude Code runs on your computer, inside your terminal..." became "Claude Code: terminal application with file, bash, and search access"
- Always preserve the full original text.

### Bullet Lists
- The Pandoc source has bullet items separated by blank lines. The parser may split these into individual single-item lists instead of one grouped list. This renders fine but is not ideal.

## File Structure

```
claude-code-course.html       -- The complete interactive course (single file, ~680KB)
Claude Code Course.docx       -- Original source document (189 pages)
CLAUDE.md                     -- This file (project conventions for Claude)
README.md                     -- Project overview and documentation
design/
  design-spec.md              -- Full design system spec
  reference-homepage.jsx      -- JSX reference for homepage layout
  reference-module-view.jsx   -- JSX reference for sidebar + content layout
  reference-content-blocks.jsx -- JSX reference for content block components
```

## Current State

### Done
- All 8 modules with 22 lessons built and rendering
- Full Go2Go source content integrated (all 8,340 lines from the original document)
- Design system implemented (colors, typography, component patterns)
- Homepage with module tile cards and progress bar
- Sidebar navigation showing all modules and lessons
- Top navigation (subtle text links) and bottom navigation (buttons)
- Previous button hidden on first lesson, Next hidden on last
- localStorage progress tracking
- Em-dashes removed throughout
- Escaped characters fixed ($, ~, apostrophes, quotes)
- Missing intro line added ("Most people know Claude as a chatbot...")

### In Progress
- Pam is reviewing the course by going through it as a student
- Iterating on content and UX based on her feedback

### Not Yet Done
- Deploy to Netlify or GitHub Pages
- Code blocks with terminal styling and copy buttons (CSS exists but renderer uses basic `<pre><code>`)
- Conversation blocks with user/Claude avatars (CSS exists but not wired up in courseData)
- Exercise cards with interactive checkboxes (CSS exists but not wired up in courseData)
- Community tip cards (CSS exists but not wired up in courseData)
- The courseData currently only uses `text`, `heading`, `list`, and `code` section types. The richer component types (conversation, exercise, community-tip) need to be identified in the source content and tagged with the right section types.

## Testing Checklist

After any content changes, verify:
1. `node -e` syntax check passes on the script block (see validator command above)
2. No escaped characters visible in rendered text (backslashes, dollar signs, tildes)
3. No em-dashes anywhere
4. All 8 modules and their lessons render
5. Navigation works (home -> module -> lessons -> next/prev)
6. Sidebar shows all lessons for all modules
7. First lesson has no Previous button, last lesson has no Next button
