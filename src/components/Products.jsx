import React from 'react'
import Image from '../components/Image'
import productimage from '../assets/product1.png'
import Badge from '../components/Badge'
import PortionHeading from './../components/PortionHeading'
import Flex from './Flex'
import { AiFillHeart } from 'react-icons/ai'
const Products = ({className}) => {
  return (
    <>
    <div className={`mr-5 ${className}`}>
        <div className='relative overflow-hidden group'>
        <Image src={productimage} className="w-full"/>
        <Badge text="New" className=""/>
        <div className='w-full absolute -bottom-32 left-0 bg-white p-6 duration-500  group-hover:bottom-0 ease-in-out gap-3'>
            <Flex className='items-center justify-end gap-x-3'>
                <p className='font-dm text-base font-normal'>Add to Wish list</p>
                <AiFillHeart/>
            </Flex>
            <Flex className='items-center justify-end gap-x-3'>
                <p className='font-dm text-base font-normal'>Compare</p>
                <AiFillHeart/>
            </Flex>
            <Flex className='items-center justify-end gap-x-3'>
                <p className='font-dm text-base font-normal'>Add to Cart</p>
                <AiFillHeart/>
            </Flex>
        </div>
        </div>
        <Flex className="justify-between pb-10 pt-6">
        <PortionHeading text="Basic Crew Neck Tee"/>
        <p className='font-dm text-base font-semibold text-stone-500 '>$55.00</p>
        </Flex>
    </div>
    </>
  )
}

export default Products