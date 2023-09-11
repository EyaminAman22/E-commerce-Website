import React from 'react'
import { FaTruck } from 'react-icons/fa'
import Flex from './Flex'


const Facility = ({text,className}) => {
  return (
   <>
   <Flex className={`${className} flex text-dm text-base font-normal items-center gap-x-4`}>
   <FaTruck/>
   <p>{text}</p>
   </Flex>
   </>
  )
}

export default Facility