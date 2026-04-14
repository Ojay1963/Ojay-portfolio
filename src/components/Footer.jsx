const footerLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Ojay1963',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 19C4 20.5 4 16.5 2 16M22 16V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2H14L22 10V16Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/onos-eloho-7703a0aa',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 8C18.2 8 20 9.8 20 12V19H16V12C16 10.9 15.1 10 14 10C12.9 10 12 10.9 12 12V19H8V12C8 9.8 9.8 8 12 8H16Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4 9H4.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 13V19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:ojaydev2010@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6H20V18H4V6Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-panel surface">
          <div className="footer-grid">
            <div className="footer-brand">
              <p className="footer-eyebrow">Available for freelance and contract work</p>
              <h2>Onos Jephtha Eloho</h2>
              <p className="footer-description">
                Full Stack Developer building fast, credible web products for startups, businesses, and product-led teams.
              </p>
              <a className="footer-email" href="mailto:ojaydev2010@gmail.com">
                ojaydev2010@gmail.com
              </a>
            </div>

            <div className="footer-column">
              <p className="footer-title">Explore</p>
              <div className="footer-link-list">
                {footerLinks.map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-column">
              <p className="footer-title">Contact</p>
              <div className="footer-meta">
                <span>Remote work, freelance builds, and contract opportunities</span>
                <a href="https://wa.me/2347082206013" target="_blank" rel="noreferrer">
                  WhatsApp: +234 708 220 6013
                </a>
                <a href="mailto:ojaydev2010@gmail.com">Email directly</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-legal">
              <span>© 2026 Onos Jephtha Eloho</span>
              <span>Designed to win serious product work.</span>
            </div>

            <div className="footer-actions">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="icon-btn"
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
              <a className="back-top" href="#top">
                Back to top ↑
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
