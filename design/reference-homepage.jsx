// Reference JSX exported from Paper - Course Homepage
// Convert JSX style objects to CSS when building HTML
// This is a visual reference, not production code

export const CourseHomepage = () => (
    <div style={{ backgroundColor: '#1A1815', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', height: '780px', overflow: 'clip', position: 'relative', width: '1440px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '64px', paddingLeft: '120px', paddingRight: '120px', paddingTop: '80px', position: 'relative' }}>
        <div style={{ boxSizing: 'border-box', color: '#E8915A', display: 'inline-block', fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', lineHeight: '16px', textTransform: 'uppercase' }}>
          Self-paced course
        </div>
        <div style={{ boxSizing: 'border-box', color: '#F0EBE3', display: 'inline-block', fontFamily: '"Fraunces", serif', fontSize: '56px', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: '64px', textAlign: 'center' }}>
          Claude Code Course
        </div>
        <div style={{ boxSizing: 'border-box', color: '#968F86', display: 'inline-block', fontFamily: '"Inter", sans-serif', fontSize: '18px', lineHeight: '28px', maxWidth: '560px', textAlign: 'center' }}>
          Master AI-assisted development from zero to confident. 8 modules, practical exercises, real workflows. Go at your own pace.
        </div>
      </div>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '16px', marginBottom: '8px', paddingInline: '120px', position: 'relative' }}>
        <div style={{ boxSizing: 'border-box', color: '#968F86', display: 'inline-block', fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 500, lineHeight: '18px' }}>
          Your progress
        </div>
        <div style={{ backgroundColor: '#2E2B28', borderRadius: '2px', boxSizing: 'border-box', display: 'flex', flexGrow: '1', height: '4px', overflow: 'clip' }}>
          <div style={{ backgroundColor: '#E8915A', borderRadius: '2px', boxSizing: 'border-box', height: '4px', width: '37%' }} />
        </div>
        <div style={{ boxSizing: 'border-box', color: '#E8915A', display: 'inline-block', fontFamily: '"Inter", sans-serif', fontSize: '14px', fontWeight: 600, lineHeight: '18px' }}>
          3 of 8
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexWrap: 'wrap', gap: '20px', paddingBottom: '64px', paddingLeft: '120px', paddingRight: '120px', paddingTop: '40px', position: 'relative' }}>
        {/* Module Card - Complete State */}
        <div style={{ backgroundColor: '#242220', borderColor: '#3A3633', borderRadius: '12px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '24px', paddingLeft: '28px', paddingRight: '28px', paddingTop: '28px', width: '280px' }}>
          <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ color: '#7FB069', fontFamily: '"Inter", sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Complete
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="9" stroke="#7FB069" strokeWidth="2" fill="none" />
              <path d="M6 10l3 3 5-5" stroke="#7FB069" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ color: '#F0EBE3', fontFamily: '"Fraunces", serif', fontSize: '22px', fontWeight: 700, lineHeight: '28px' }}>
              Getting Started
            </div>
            <div style={{ color: '#968F86', fontFamily: '"Inter", sans-serif', fontSize: '14px', lineHeight: '20px' }}>
              Install, configure, and run your first prompt
            </div>
          </div>
          <div style={{ color: '#635D56', fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: 500 }}>
            Module 1 &middot; 4 lessons
          </div>
        </div>
        {/* Repeat pattern for modules 2-8, changing state/content */}
      </div>
    </div>
  )
