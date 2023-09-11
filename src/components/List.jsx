import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`font-dm text-sm font-regular hover:font-bold duration-500 ${className}`}>{text}</li>
  )
}

export default List