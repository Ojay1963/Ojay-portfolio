import Button from '../components/Button.jsx'

function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Page Not Found</h2>
        <p className="muted">The page you are looking for does not exist.</p>
        <Button to="/" variant="primary">
          Go Home
        </Button>
      </div>
    </section>
  )
}

export default NotFound
