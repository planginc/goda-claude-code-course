# Claude Code Course - Design Specification

Design mockups are in the Paper file "Claude Code Goda Go". This spec contains all tokens and patterns needed to build.

## Color Palette

| Role       | Hex       | Usage                                      |
|------------|-----------|---------------------------------------------|
| Background | `#1A1815` | Page background, warm near-black            |
| Surface    | `#242220` | Cards, panels, conversation blocks          |
| Elevated   | `#2E2B28` | Hover states, sidebar bg, code block header |
| Sidebar    | `#1F1D1B` | Sidebar navigation background               |
| Code BG    | `#131211` | Code block background                       |
| Border     | `#3A3633` | Card borders, dividers, separators          |
| Accent     | `#E8915A` | Terracotta. Primary accent, progress bar, active states, CTAs |
| Success    | `#7FB069` | Sage green. Completed items, checkmarks, exercise headers     |
| Community  | `#C4956A` | Golden warm. Community tip cards, member contributions        |
| Text Primary   | `#F0EBE3` | Headings, names, primary content        |
| Text Body      | `#C4BEB5` | Body paragraphs, message content        |
| Text Secondary | `#968F86` | Subtitles, descriptions, muted labels   |
| Text Muted     | `#635D56` | Module metadata, locked state labels    |

## Typography

### Fonts (all available on Google Fonts)
- **Display/Headings:** Fraunces (variable, 100-900 weight)
- **Body/UI:** Inter (variable, 100-900 weight)
- **Code/Terminal:** JetBrains Mono (variable, 100-800 weight)

### Type Scale

| Element              | Font          | Size  | Weight | Line Height | Extras                        |
|----------------------|---------------|-------|--------|-------------|-------------------------------|
| Page title           | Fraunces      | 56px  | 800    | 64px        | letter-spacing: -0.02em       |
| Lesson title         | Fraunces      | 40px  | 800    | 48px        | letter-spacing: -0.02em       |
| Section heading      | Fraunces      | 24px  | 700    | 32px        |                               |
| Card title           | Fraunces      | 22px  | 700    | 28px        |                               |
| Exercise title       | Fraunces      | 20px  | 700    | 26px        |                               |
| Sidebar module name  | Fraunces      | 18px  | 700    | 24px        |                               |
| Body text            | Inter         | 16px  | 400    | 26px        |                               |
| Chat message         | Inter         | 15px  | 400    | 24px        |                               |
| Subtitle/description | Inter         | 14px  | 400    | 20-22px     |                               |
| Label (uppercase)    | Inter         | 13px  | 500    | 16px        | letter-spacing: 0.08-0.12em, uppercase |
| Status badge         | Inter         | 12px  | 600    | 16px        | letter-spacing: 0.06em, uppercase      |
| Section label        | Inter         | 11px  | 600    | 14px        | letter-spacing: 0.1em, uppercase       |
| Code text            | JetBrains Mono| 14px  | 400    | 24px        |                               |
| Code header          | JetBrains Mono| 12px  | 400    | 16px        |                               |
| Hex values           | JetBrains Mono| 12px  | 400    | 16px        |                               |

## Spacing System

| Level    | Value | Usage                              |
|----------|-------|------------------------------------|
| Page pad | 120px | Left/right padding on homepage     |
| Section  | 64px  | Between major sections             |
| Group    | 32px  | Between content groups             |
| Element  | 16-20px | Between related elements         |
| Tight    | 4-8px | Within components, label gaps      |
| Card gap | 20px  | Grid gap between module cards      |

## Component Patterns

### Module Card (280px wide)
- Background: `#242220`
- Border: 1px solid `#3A3633`
- Border radius: 12px
- Padding: 28px 28px 24px 28px
- Gap between sections: 16px
- Three states:
  - **Complete:** green status text + check circle, border `#3A3633`
  - **In Progress:** terracotta status + partial ring, border `#E8915A`
  - **Locked:** muted status + empty circle, border `#3A3633`

### Progress Bar
- Track: `#2E2B28`, 4px height, 2px radius
- Fill: `#E8915A`, 2px radius
- Text left: "Module X of 8" in `#968F86`
- Text right: "37% complete" in `#E8915A`, weight 600

### Sidebar Navigation (280px wide)
- Background: `#1F1D1B`
- Right border: 1px solid `#3A3633`
- Padding: 32px 24px
- Nav items: 10px 12px padding, 8px border-radius, 10px gap
- States:
  - **Complete:** green check SVG + green text
  - **Active:** terracotta circle border + terracotta text, bg `#E8915A22`
  - **Locked:** gray circle border + muted text

### Code Block
- Outer: bg `#131211`, border 1px `#2E2B28`, radius 10px
- Header: bg `#1E1D1B`, border-bottom 1px `#2E2B28`, padding 10px 16px
- Header left: "terminal" in JetBrains Mono 12px `#635D56`
- Copy button: border 1px `#3A3633`, radius 4px, padding 4px 10px
- Code area: padding 20px, JetBrains Mono 14px `#C4BEB5`, white-space: pre

### Conversation Block
- Outer: bg `#242220`, border 1px `#2E2B28`, radius 10px, padding 24px
- User avatar: 32px circle, bg `#E8915A`, initial in `#1A1815` bold
- Claude avatar: 32px circle, bg `#2E2B28`, border 1px `#3A3633`, diamond SVG icon
- Name: Inter 13px weight 600 `#F0EBE3`
- Message: Inter 15px `#C4BEB5`

### Annotation Callout
- Left border: 3px solid `#E8915A`
- Background: `#E8915A12` (very faint terracotta)
- Border radius: 0px 8px 8px 0px (rounded on right only)
- Padding: 14px 16px
- Text: Inter 14px `#E8915A`
- Info icon: circle with "i", stroked in `#E8915A`

### Exercise Card
- Outer: bg `#242220`, border 1px `#7FB06940`, radius 10px
- Header: bg `#7FB06910`, border-bottom 1px `#7FB06930`
- Header icon: checkbox SVG in `#7FB069`
- Title: "Try it yourself" Inter 14px weight 600 `#7FB069`
- Exercise name: Fraunces 20px weight 700
- Checkbox states:
  - **Checked:** 20px square, bg `#7FB069`, checkmark SVG in `#1A1815`, text struck through in `#968F86`
  - **Unchecked:** 20px square, border 2px `#3A3633`, text in `#C4BEB5`

### Community Tip Card
- Outer: bg `#242220`, border 1px `#C4956A30`, radius 10px
- Header: bg `#C4956A10`, border-bottom 1px `#C4956A25`
- Header icon: star SVG in `#C4956A`
- Title: "Community tip" Inter 14px weight 600 `#C4956A`
- Quote text: Inter 15px `#C4BEB5`
- Author avatar: 28px circle, bg `#3A3633`, initial in `#C4956A`
- Author name: Inter 13px weight 600 `#F0EBE3`
- Author role: Inter 12px `#635D56`

## SVG Icons Used

All icons are custom SVGs, stroked (not filled). Key icons:
- **Checkmark circle** (complete): circle + checkmark path, `#7FB069`
- **Partial ring** (in progress): circle bg `#3A3633` + arc `#E8915A`
- **Empty circle** (locked): circle stroke `#3A3633`
- **Copy icon**: overlapping rectangles, stroke `#968F86`
- **Info icon**: circle + "i" shape, stroke `#E8915A`
- **Star icon**: 5-point star path, stroke `#C4956A`
- **Checkbox square**: rounded rect + checkmark, stroke/fill `#7FB069`
- **Claude diamond**: hexagon-like shape, stroke `#E8915A`

## Layout Structure

### Homepage
```
[Page bg #1A1815]
  [Hero - centered, 120px side padding]
    "SELF-PACED COURSE" label
    "Claude Code Course" title
    Subtitle paragraph
  [Progress bar - 120px side padding]
  [Module grid - 4 columns, 20px gap, 120px side padding]
    8 module cards (280px each)
```

### Module View
```
[Top bar - progress, bg #242220]
  "Module 3 of 8" | progress bar | "37% complete"
[Main - flex row]
  [Sidebar 280px - bg #1F1D1B]
    Module title
    6 nav items with status indicators
  [Content area - flex 1, 80px padding]
    "LESSON 2 OF 6" label
    Lesson title (Fraunces 40px)
    Body paragraphs
    Divider line
    Section heading (Fraunces 24px)
    More body text
```

## Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100..900&family=Inter:opsz,wght@14..32,100..900&family=JetBrains+Mono:wght@100..800&display=swap" rel="stylesheet">
```

## Notes for Build
- Dark mode only (no light mode toggle needed for v1)
- Responsive: designed at 1440px desktop, should work down to tablet
- Progress state is stored in localStorage
- Module cards link to individual module pages
- Each module is its own HTML page with sidebar nav
- Content blocks (code, conversation, exercise, community tip) are reusable components
- The Paper file "Claude Code Goda Go" has the visual mockups for reference
