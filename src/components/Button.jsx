import React from 'react'

const Button = ({className,text}) => {
  return (
   <>
   <button className={`py-4 px-16 bg-black text-white text-dm text-sm font-bold border border-solid border-black border-2 hover:bg-white hover:text-black duration-500 ${className}`}>{text}</button>
   </>
  )
}

export default Button