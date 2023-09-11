import React from 'react'

const Input = ({title,type,placeholder,className}) => {
  return (
   <>
        <h1 className='font-bold font-dm text-base'>{title}</h1>
   <input className={`w-full border-b border-solid border-offwhite placeholder:font-normal placeholder:font-dm placeholder:text-sm py-2 mb-6 pl-2 ${className}`} placeholder={placeholder} type={type}/>
     </>
  )
}

export default Input