import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`font-dm text-sm font-regular ${className}`}>{text}</li>
  )
}

export default List