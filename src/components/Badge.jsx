import React from 'react'

const Badge = ({className,text}) => {
  return (
    <>
    <div className={`py-2 px-8 bg-black text-white text-dm text-sm font-bold absolute left-5 top-5 ${className}`}>{text}</div>
    </>
  )
}

export default Badge