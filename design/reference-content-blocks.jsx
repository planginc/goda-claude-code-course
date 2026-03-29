// Reference JSX exported from Paper - Content Block Components
// These are the 4 reusable content types used throughout the course

// ============================================
// 1. CODE BLOCK (terminal-style with copy button)
// ============================================
export const CodeBlock = () => (
  <div style={{ backgroundColor: '#131211', borderColor: '#2E2B28', borderRadius: '10px', borderStyle: 'solid', borderWidth: '1px', display: 'flex', flexDirection: 'column', overflow: 'clip' }}>
    <div style={{ alignItems: 'center', backgroundColor: '#1E1D1B', borderBottomColor: '#2E2B28', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', justifyContent: 'space-between', paddingBlock: '10px', paddingInline: '16px' }}>
      <div style={{ color: '#635D56', fontFamily: '"JetBrains Mono", monospace', fontSize: '12px' }}>
        terminal
      </div>
      <div style={{ alignItems: 'center', borderColor: '#3A3633', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', display: 'flex', gap: '6px', paddingBlock: '4px', paddingInline: '10px', cursor: 'pointer' }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect x="2" y="4" width="7" height="8" rx="1" stroke="#968F86" strokeWidth="1.2" fill="none" />
          <path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-1" stroke="#968F86" strokeWidth="1.2" fill="none" />
        </svg>
        <div style={{ color: '#968F86', fontFamily: '"Inter", sans-serif', fontSize: '12px', fontWeight: 500 }}>
          Copy
        </div>
      </div>
    </div>
    <div style={{ padding: '20px' }}>
      <pre style={{ color: '#C4BEB5', fontFamily: '"JetBrains Mono", monospace', fontSize: '14px', lineHeight: '24px', whiteSpace: 'pre', margin: 0 }}>
{`claude "Add a login page to my app with
email and password fields, validation,
and a forgot password link"`}
      </pre>
    </div>
  </div>
)

// ============================================
// 2. CONVERSATION BLOCK (chat bubbles + annotation)
// ============================================
export const ConversationBlock = () => (
  <div style={{ backgroundColor: '#242220', borderColor: '#2E2B28', borderRadius: '10px', borderStyle: 'solid', borderWidth: '1px', display: 'flex', flexDirection: 'column', overflow: 'clip', padding: '24px' }}>
    {/* User message */}
    <div style={{ alignItems: 'flex-start', display: 'flex', gap: '12px', paddingBottom: '20px' }}>
      <div style={{ alignItems: 'center', backgroundColor: '#E8915A', borderRadius: '16px', display: 'flex', flexShrink: '0', height: '32px', justifyContent: 'center', width: '32px' }}>
        <div style={{ color: '#1A1815', fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: 700 }}>Y</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ color: '#F0EBE3', fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: 600 }}>You</div>
        <div style={{ color: '#C4BEB5', fontFamily: '"Inter", sans-serif', fontSize: '15px', lineHeight: '24px' }}>
          Add error handling to the API routes in server.js. Each route should return proper status codes and error messages.
        </div>
      </div>
    </div>

    {/* Annotation callout */}
    <div style={{ alignItems: 'flex-start', backgroundColor: '#E8915A12', borderBottomRightRadius: '8px', borderLeftColor: '#E8915A', borderLeftStyle: 'solid', borderLeftWidth: '3px', borderTopRightRadius: '8px', display: 'flex', gap: '12px', marginBottom: '20px', marginLeft: '44px', paddingBlock: '14px', paddingInline: '16px' }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: '0', marginTop: '2px' }}>
        <circle cx="9" cy="9" r="8" stroke="#E8915A" strokeWidth="1.5" fill="none" />
        <path d="M9 8v4M9 6h0" stroke="#E8915A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div style={{ color: '#E8915A', fontFamily: '"Inter", sans-serif', fontSize: '14px', lineHeight: '22px' }}>
        Notice how specific this prompt is. Instead of "fix my code," it names the file, the task, and the expected behavior. This gets much better results.
      </div>
    </div>

    {/* Claude message */}
    <div style={{ alignItems: 'flex-start', display: 'flex', gap: '12px' }}>
      <div style={{ alignItems: 'center', backgroundColor: '#2E2B28', borderColor: '#3A3633', borderRadius: '16px', borderStyle: 'solid', borderWidth: '1px', display: 'flex', flexShrink: '0', height: '32px', justifyContent: 'center', width: '32px' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2L3 6v4l5 4 5-4V6L8 2z" stroke="#E8915A" strokeWidth="1.2" fill="none" />
        </svg>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ color: '#F0EBE3', fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: 600 }}>Claude</div>
        <div style={{ color: '#C4BEB5', fontFamily: '"Inter", sans-serif', fontSize: '15px', lineHeight: '24px' }}>
          I'll add try-catch blocks to each route with appropriate HTTP status codes. Let me read the file first to understand the current structure...
        </div>
      </div>
    </div>
  </div>
)

// ============================================
// 3. EXERCISE CARD (checkboxes for hands-on practice)
// ============================================
export const ExerciseCard = () => (
  <div style={{ backgroundColor: '#242220', borderColor: '#7FB06940', borderRadius: '10px', borderStyle: 'solid', borderWidth: '1px', display: 'flex', flexDirection: 'column', overflow: 'clip' }}>
    {/* Header */}
    <div style={{ alignItems: 'center', backgroundColor: '#7FB06910', borderBottomColor: '#7FB06930', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', gap: '10px', paddingBlock: '16px', paddingInline: '24px' }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="14" height="14" rx="3" stroke="#7FB069" strokeWidth="1.5" fill="none" />
        <path d="M6 9l2 2 4-4" stroke="#7FB069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div style={{ color: '#7FB069', fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 600 }}>Try it yourself</div>
    </div>
    {/* Title area */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingBlock: '20px', paddingInline: '24px' }}>
      <div style={{ color: '#F0EBE3', fontFamily: '"Fraunces", serif', fontSize: '20px', fontWeight: 700, lineHeight: '26px' }}>Edit a Config File</div>
      <div style={{ color: '#968F86', fontFamily: '"Inter", sans-serif', fontSize: '14px', lineHeight: '22px' }}>
        Practice making targeted edits to an existing file without rewriting the whole thing.
      </div>
    </div>
    {/* Checklist */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '24px', paddingInline: '24px' }}>
      {/* Checked item */}
      <div style={{ alignItems: 'flex-start', display: 'flex', gap: '10px' }}>
        <div style={{ alignItems: 'center', backgroundColor: '#7FB069', borderRadius: '4px', display: 'flex', flexShrink: '0', height: '20px', justifyContent: 'center', marginTop: '1px', width: '20px' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 6l2 2 4-4" stroke="#1A1815" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div style={{ color: '#968F86', fontFamily: '"Inter", sans-serif', fontSize: '15px', lineHeight: '22px', textDecoration: 'line-through' }}>
          Create a new folder with a package.json file
        </div>
      </div>
      {/* Unchecked item */}
      <div style={{ alignItems: 'flex-start', display: 'flex', gap: '10px' }}>
        <div style={{ borderColor: '#3A3633', borderRadius: '4px', borderStyle: 'solid', borderWidth: '2px', flexShrink: '0', height: '20px', marginTop: '1px', width: '20px' }} />
        <div style={{ color: '#C4BEB5', fontFamily: '"Inter", sans-serif', fontSize: '15px', lineHeight: '22px' }}>
          Ask Claude to change the version number to 2.0.0
        </div>
      </div>
    </div>
  </div>
)

// ============================================
// 4. COMMUNITY TIP CARD (member contributions)
// ============================================
export const CommunityTipCard = () => (
  <div style={{ backgroundColor: '#242220', borderColor: '#C4956A30', borderRadius: '10px', borderStyle: 'solid', borderWidth: '1px', display: 'flex', flexDirection: 'column', overflow: 'clip' }}>
    {/* Header */}
    <div style={{ alignItems: 'center', backgroundColor: '#C4956A10', borderBottomColor: '#C4956A25', borderBottomStyle: 'solid', borderBottomWidth: '1px', display: 'flex', gap: '10px', paddingBlock: '14px', paddingInline: '24px' }}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1l2.47 5.01L17 6.87l-4 3.9.94 5.5L9 13.77l-4.94 2.5.94-5.5-4-3.9 5.53-.86L9 1z" stroke="#C4956A" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
      </svg>
      <div style={{ color: '#C4956A', fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 600 }}>Community tip</div>
    </div>
    {/* Content */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingBlock: '20px', paddingInline: '24px' }}>
      <div style={{ color: '#C4BEB5', fontFamily: '"Inter", sans-serif', fontSize: '15px', lineHeight: '24px' }}>
        "I always start my CLAUDE.md with a one-liner about what the project does. Claude picks up on that context immediately and stops asking basic questions about the codebase."
      </div>
      {/* Author */}
      <div style={{ alignItems: 'center', display: 'flex', gap: '10px' }}>
        <div style={{ alignItems: 'center', backgroundColor: '#3A3633', borderRadius: '14px', display: 'flex', flexShrink: '0', height: '28px', justifyContent: 'center', width: '28px' }}>
          <div style={{ color: '#C4956A', fontFamily: '"Inter", sans-serif', fontSize: '12px', fontWeight: 600 }}>S</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#F0EBE3', fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: 600 }}>Sjoerd</div>
          <div style={{ color: '#635D56', fontFamily: '"Inter", sans-serif', fontSize: '12px' }}>Goda Go community member</div>
        </div>
      </div>
    </div>
  </div>
)
