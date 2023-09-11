import React from 'react'
import { Children } from 'react'

const Breadcrumb = ({children,className}) => {
  return (
    <p className={`first-letter:uppercase ml-2 ${className}`}>{children}</p>
  )
}

export default Breadcrumb