# HANDOVER.md

## Carry forward
None from prior session (this was the first session).

## What changed this session
- Created project folder `/Users/pam/Documents/goda-claude-code-course/`
- Moved all files from `/Users/pam/Documents/Autonomee/claude-code/` (old location, now deleted)
- Renamed `claude-code-course.html` -> `index.html` (required for Vercel static hosting)
- Replaced stub CLAUDE.md and README.md with the richer originals from old folder
- Added Convex project ID to CLAUDE.md
- Created GitHub repo: `planginc/goda-claude-code-course`
- Deployed to Vercel (auto-deploys on push to main)
- Added project as #11 to `~/.claude/hooks/session-start-directory-check.sh`

## What was tried and did not work
- First Vercel deploy returned 404 NOT_FOUND -- Vercel expects `index.html` at root, not `claude-code-course.html`. Fixed by renaming.

## What is next
Open the live Vercel URL in a browser, go through the course as a student, and identify the next content or UX iteration.

## Key decisions
- Renamed to `index.html` rather than adding a `vercel.json` redirect -- simpler, no config file needed.
- Kept the old CLAUDE.md (much richer than the stub) and added Convex project ID to it.
