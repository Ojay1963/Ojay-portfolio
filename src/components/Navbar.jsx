import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [isLight, setIsLight] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    document.body.classList.toggle('light', isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  }, [isLight])

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
        <Link className="brand" to="/">
          <div className="brand-badge">OJ</div>
          <div className="brand-text">
            <h1>Onos Jephtha Eloho</h1>
            <span>Full Stack Developer</span>
          </div>
        </Link>

        <nav className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
            onClick={toggleTheme}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              {isLight ? (
                <path
                  d="M20 15.2A7.5 7.5 0 1 1 8.8 4A8.5 8.5 0 0 0 20 15.2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <>
                  <path
                    d="M12 3.5V6.5M12 17.5V20.5M4.5 12H7.5M16.5 12H19.5M6.3 6.3L8.4 8.4M15.6 15.6L17.7 17.7M17.7 6.3L15.6 8.4M8.4 15.6L6.3 17.7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                </>
              )}
            </svg>
          </button>
          <Button href="#contact" variant="primary">
            Contact Me
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
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
