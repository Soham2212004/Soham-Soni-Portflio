import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ href, children, className, ...props }) => {
  // Handle external links
  if (href.startsWith('http') || href.startsWith('mailto')) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    )
  }

  // Handle internal navigation
  return (
    <RouterLink to={href} className={className} {...props}>
      {children}
    </RouterLink>
  )
}

export default Link