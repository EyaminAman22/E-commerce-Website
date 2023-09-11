import Container  from '../Container'
import React from 'react'
import Flex from '../Flex'
import {FaBars} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {IoMdArrowDropdown,IoMdCart} from 'react-icons/io'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import Input from '../Input'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { pageName } from '../../slices/Breadcrumbslice'
const Searchbar = () => {
    let dispatch=useDispatch()
 let handleBreadCrumb=(name)=>{
    dispatch(pageName(name))
 }
    return (
   <>
   <section className='bg-ash py-10 mb-36'>
    <Container>
        <Flex className="">
            <Flex className='w-1/5 items-center gap-x-2.5'>
                <FaBars/>Shop by Category
            </Flex>
            <div className='w-3/5 justify-center relative items-center'>
                <Input className="w-full py-4 px-5 mb-0" placeholder="Search Products" />
                <HiMagnifyingGlass className='absolute top-1/2 -translate-y-1/2 right-4  text-2xl'/>
            </div>
            <Flex className='w-1/5 items-center gap-x-10 justify-end'>
                <Flex className='gap-x-2.5'>
                    <Link onClick={()=>handleBreadCrumb("Sign Up")} to="/sign-up">
                    <BsFillPersonFill/>
                    </Link>
                    <Link onClick={()=>handleBreadCrumb("Login")} to="/login">
                    <IoMdArrowDropdown/>
                    </Link>
                    
                </Flex>
                <Link onClick={()=>handleBreadCrumb("Checkout")} to="/checkout">
                <IoMdCart/>
                    </Link>
                
            </Flex>
        </Flex>
    </Container>
   </section>
   </>
  )
}

export default Searchbar