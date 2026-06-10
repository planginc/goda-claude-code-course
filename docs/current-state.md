# Current State

> Read this file when you need to know what's done, in progress, or remaining on the Go2Go course build. CLAUDE.md points here.

## Done

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

## In Progress

- Pam is reviewing the course by going through it as a student
- Iterating on content and UX based on her feedback

## Not Yet Done

- Deploy to Netlify or GitHub Pages
- Code blocks with terminal styling and copy buttons (CSS exists but renderer uses basic `<pre><code>`)
- Conversation blocks with user/Claude avatars (CSS exists but not wired up in courseData)
- Exercise cards with interactive checkboxes (CSS exists but not wired up in courseData)
- Community tip cards (CSS exists but not wired up in courseData)
- The courseData currently only uses `text`, `heading`, `list`, and `code` section types. The richer component types (conversation, exercise, community-tip) need to be identified in the source content and tagged with the right section types.
