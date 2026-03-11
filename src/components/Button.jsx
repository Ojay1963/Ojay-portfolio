import { Link } from 'react-router-dom'

function Button({ to, href, variant = 'primary', children, className = '', ...rest }) {
  const classes = `${variant === 'primary' ? 'primary-btn' : 'ghost-btn'} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
