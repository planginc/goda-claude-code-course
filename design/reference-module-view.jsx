// Reference JSX exported from Paper - Module View (sidebar + content)
// Convert JSX style objects to CSS when building HTML

export const ModuleView = () => (
    <div style={{ boxSizing: 'border-box', display: 'flex', flexGrow: '1', position: 'relative' }}>
      {/* Sidebar Navigation */}
      <div style={{ backgroundColor: '#1F1D1B', borderRightColor: '#3A3633', borderRightStyle: 'solid', borderRightWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '4px', paddingBlock: '32px', paddingInline: '24px', width: '280px' }}>
        <div style={{ color: '#F0EBE3', fontFamily: '"Fraunces", serif', fontSize: '18px', fontWeight: 700, lineHeight: '24px', marginBottom: '20px' }}>
          Working with Files
        </div>
        {/* Complete nav item */}
        <div style={{ alignItems: 'center', backgroundColor: '#E8915A15', borderRadius: '8px', display: 'flex', gap: '10px', paddingBlock: '10px', paddingInline: '12px' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="#7FB069" strokeWidth="1.5" fill="none" />
            <path d="M5 8l2 2 4-4" stroke="#7FB069" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ color: '#7FB069', fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>
            Reading files
          </div>
        </div>
        {/* Active nav item */}
        <div style={{ alignItems: 'center', backgroundColor: '#E8915A22', borderRadius: '8px', display: 'flex', gap: '10px', paddingBlock: '10px', paddingInline: '12px' }}>
          <div style={{ borderColor: '#E8915A', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', flexShrink: '0', height: '16px', width: '16px' }} />
          <div style={{ color: '#E8915A', fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 500 }}>
            Editing files
          </div>
        </div>
        {/* Locked nav item */}
        <div style={{ alignItems: 'center', borderRadius: '8px', display: 'flex', gap: '10px', paddingBlock: '10px', paddingInline: '12px' }}>
          <div style={{ borderColor: '#3A3633', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', flexShrink: '0', height: '16px', width: '16px' }} />
          <div style={{ color: '#968F86', fontFamily: '"Inter", sans-serif', fontSize: '14px' }}>
            Creating new files
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', gap: '32px', overflow: 'clip', paddingBlock: '48px', paddingInline: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ color: '#E8915A', fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Lesson 2 of 6
          </div>
          <div style={{ color: '#F0EBE3', fontFamily: '"Fraunces", serif', fontSize: '40px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '48px' }}>
            Editing Files
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ color: '#C4BEB5', fontFamily: '"Inter", sans-serif', fontSize: '16px', lineHeight: '26px' }}>
            Claude Code can edit any file in your project. You don't need to copy-paste code or manually make changes. Just describe what you want, and Claude handles the rest.
          </div>
          <div style={{ color: '#C4BEB5', fontFamily: '"Inter", sans-serif', fontSize: '16px', lineHeight: '26px' }}>
            There are two main approaches: targeted edits (changing specific lines) and full rewrites (replacing entire files). Let's look at when to use each.
          </div>
        </div>
        {/* Section divider */}
        <div style={{ backgroundColor: '#3A3633', height: '1px', width: '100%' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ color: '#F0EBE3', fontFamily: '"Fraunces", serif', fontSize: '24px', fontWeight: 700, lineHeight: '32px' }}>
            Targeted Edits
          </div>
          <div style={{ color: '#C4BEB5', fontFamily: '"Inter", sans-serif', fontSize: '16px', lineHeight: '26px' }}>
            When you need to change a specific part of a file, be precise about what you want changed. Claude will use its Edit tool to surgically modify just that section, leaving everything else untouched.
          </div>
        </div>
      </div>
    </div>
  )
