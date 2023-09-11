import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
const NextArrow = (props) => {
    const { className, onClick } = props
    return (
      <>
      <div
      className={` right-5 top-1/2 -translate-y-1/2 absolute flex rounded-full bg-stone-300 hover:text-white hover:bg-stone-500 cursor-pointer duration-500 w-16 h-16 justify-center items-center inline-block ${className}`} onClick={onClick}>
        <FaAngleRight/>
      </div>
      </>
    );
}

export default NextArrow