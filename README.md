# Claude Code Course

An interactive, self-paced HTML course teaching professionals how to build a personal AI workstation with Claude Code. Created by Go2Go for the Go2Go Skool community.

## What This Is

A single-file interactive course (`claude-code-course.html`) covering 8 modules and 22 lessons. Students open it in a browser via a hosted URL -- no downloads, no repo cloning, no technical setup.

## Course Modules

1. What is Claude?
2. Getting Started
3. Claude as a Thinking Partner
4. CLAUDE.md and Working Daily with Claude Code
5. MCP Servers
6. Skills - Using and Creating
7. Rules, Commands, and Hooks
8. Your Personal AI Workstation

## Features

- Single self-contained HTML file (no external dependencies except Google Fonts)
- Dark mode design with warm terracotta accent palette
- Sidebar navigation showing all modules and lessons
- Next/Previous navigation at top (subtle text links) and bottom (buttons)
- Progress tracking via localStorage (persists in the student's browser)
- Responsive layout

## File Structure

```
claude-code-course.html    -- The complete interactive course (single file)
Claude Code Course.docx    -- Original source document (189 pages)
design/
  design-spec.md           -- Full design system spec (colors, typography, components)
  reference-homepage.jsx   -- JSX reference for homepage layout
  reference-module-view.jsx -- JSX reference for sidebar + content layout
  reference-content-blocks.jsx -- JSX reference for content block components
```

## How to Deploy

Drop `claude-code-course.html` into any static hosting:

- **Netlify**: Drag the file into a Netlify site, or connect a GitHub repo
- **GitHub Pages**: Push to a repo, enable Pages in settings

Students access it via the hosted URL. Nothing to install.

## How to Edit Content

All course content lives in the `courseData` JavaScript object inside `claude-code-course.html`. It's a data-driven structure:

```javascript
const courseData = {
    modules: [
        {
            id: 'module-1',
            number: 1,
            title: 'What is Claude?',
            description: '...',
            lessons: [
                {
                    id: 'lesson-1',
                    title: 'From Conversation to Delegation',
                    sections: [
                        { type: 'text', content: '...' },
                        { type: 'heading', content: '...' },
                        { type: 'list', items: ['...', '...'] },
                        { type: 'code', content: '...' }
                    ]
                }
            ]
        }
    ]
};
```

To edit: find the relevant module/lesson in the `courseData` object, change the text, save. The rendering engine handles everything else.

## Design System

- **Background**: #1A1815 (dark warm), Surface: #242220, Elevated: #2E2B28
- **Accent**: #E8915A (terracotta)
- **Success**: #7FB069 (green)
- **Typography**: Fraunces (headings), Inter (body), JetBrains Mono (code)
- **Full spec**: See `design/design-spec.md`
