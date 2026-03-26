function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© 2026 Onos Jephtha Eloho. All rights reserved.</div>
        <div className="footer-actions">
          <a
            className="icon-btn"
            href="https://github.com/Ojay1963"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 19C4 20.5 4 16.5 2 16M22 16V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2H14L22 10V16Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            className="icon-btn"
            href="https://www.linkedin.com/in/onos-eloho-7703a0aa"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
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
          </a>
          <a className="back-top" href="#top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
