import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button.jsx'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [isLight, setIsLight] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      document.body.classList.add('light')
      setIsLight(true)
    }
  }, [])

  const toggleTheme = () => {
    setIsLight((prev) => {
      const next = !prev
      document.body.classList.toggle('light', next)
      localStorage.setItem('theme', next ? 'light' : 'dark')
      return next
    })
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <div className="brand-badge">OJ</div>
          <div className="brand-text">
            <h1>Onos Jephtha Eloho</h1>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Toggle theme" onClick={toggleTheme}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3.5V6.5M12 17.5V20.5M4.5 12H7.5M16.5 12H19.5M6.3 6.3L8.4 8.4M15.6 15.6L17.7 17.7M17.7 6.3L15.6 8.4M8.4 15.6L6.3 17.7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <Button to="/contact" variant="primary">
            Share
          </Button>
          <button className="mobile-toggle" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="container">
          <div className="mobile-menu">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} end>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
