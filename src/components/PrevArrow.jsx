import React from 'react'
import { FaAngleLeft } from 'react-icons/fa';
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
    <>
    <div className='flex justify-center ml-20'>
    <div
      className={`flex -bottom-1/4 -translate-y-1/2 rounded-full bg-stone-300 hover:text-white hover:bg-stone-500 cursor-pointer duration-500 absolute w-16 h-16 z-10 justify-center items-center inline-block ${className}`} onClick={onClick}>
        <FaAngleLeft/>
      </div>
    </div>

    </>
  )
}

export default PrevArrow