// FIX (step 2a): import the hook.
// import { useIdleTimer } from '../hooks/useIdleTimer'

type Status = 'active' | 'away'

const BADGES: Record<Status, { label: string; className: string }> = {
  active: { label: 'Active', className: 'status-badge status-badge--active' },
  away: { label: 'Away (Idle)', className: 'status-badge status-badge--away' },
}

export function DashboardHeader() {
  // BUG: the status is hardcoded, so the badge is stuck on "Active" forever.
  const status: Status = 'active'

  // FIX (step 2b): delete the hardcoded line above and get the status from the hook.
  // const isIdle = useIdleTimer() // defaults to 5 seconds
  // const status: Status = isIdle ? 'away' : 'active'

  const badge = BADGES[status]

  return (
    <header className="dashboard-header">
      <div className="dashboard-header__brand">
        <span className="dashboard-header__logo" aria-hidden="true">◆</span>
        <h1 className="dashboard-header__title">Team Dashboard</h1>
      </div>

      <nav className="dashboard-header__nav" aria-label="Main">
        <a href="#">Overview</a>
        <a href="#">Projects</a>
        <a href="#">Reports</a>
      </nav>

      <div className="dashboard-header__user">
        <span className={badge.className} role="status" aria-live="polite">
          <span className="status-badge__dot" aria-hidden="true" />
          {badge.label}
        </span>
        <span className="dashboard-header__avatar" role="img" aria-label="Your profile">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <circle cx="12" cy="8" r="4" fill="currentColor" />
            <path d="M4 21a8 8 0 0 1 16 0z" fill="currentColor" />
          </svg>
        </span>
      </div>
    </header>
  )
}
