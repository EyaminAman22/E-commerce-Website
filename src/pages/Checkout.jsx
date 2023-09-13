import Container  from '../components/Container'
import React from 'react'
import SubHeading from '../components/SubHeading'
import Breadcrumb from '../components/Breadcrumb'
import { useSelector } from 'react-redux'
import Flex from '../components/Flex'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import PortionHeading from '../components/PortionHeading'


const Checkout = () => {
  const pageName= useSelector((state=>state.breadcrumb.previousname))
  return (
    <>
    <Container>
        {/* head and top */}
      <SubHeading className="text-49 pb-2.5" text="Checkout"/>
      <Flex className="pb-32"> <Link className='mr-2' to={pageName=="Home"?"/":`/${pageName.toLowerCase()}`}>{pageName}</Link>\ <Breadcrumb>{window.location.pathname.replace(("/"),(" ")).replace(("-"),(" "))}</Breadcrumb>
      </Flex>
      <p className='font-dm font-normal text-base mb-28 leading-8 text-grey-white w-1/2'>Have a coupon? <span className='font-dm font-normal text-base text-black'>Click here to enter your code</span></p>

      {/* billing details part */}
      <SubHeading className="mb-10" text="Your Personal Details"/>
      <div className="pb-16 border-solid border-b-2">
      <Flex className="gap-x-[51px] flex-wrap">
        <div className='w-1/3'>
        <Input title="First Name *" placeholder="First Name" type="text" className=""/>
        </div>
        <div className='w-1/3'>
        <Input title="Last Name *" placeholder="Last Name" type="text" className="pb-2"/>
        </div>
        </Flex>
        <div className='w-2/3'>
        <Input title="Company Name (optional)" placeholder="Company Name" type="text" className=""/>
        <Input title="Country *" placeholder="" type="text" className="pb-2"/>
        <Input title="Street Address *" placeholder="House number and Street name" type="text" className="pb-2"/>
        <Input title="" placeholder="Apartment, suite, unit etc (optional)" type="text" className="pb-2"/>
        <Input title="Town/City *" placeholder="Town/City" type="text" className="pb-2"/>
        <Input title="County (optionl)" placeholder="County" type="text" className="pb-2"/>
        <Input title="Post Code *" placeholder="Post Code" type="number" className="pb-2"/>
        <Input title="Phone *" placeholder="Phone" type="number" className="pb-2"/>
        <Input title="Email Address *" placeholder="Email" type="email" className="pb-2"/>
        </div>
      </div>

      {/* Information part */}
        <div className='my-32'>
        <SubHeading className=" mb-10" text="Additional Information"/>
        <label className='font-dm font-normal text-sm text-grey-white'> Notes about your order, e.g. special notes for delivery.</label>
        <Input type="text" className="mt-8 w-2/3"/>
        </div>
        <div className=''>

            {/* your order part */}
        <SubHeading className=" mb-12" text="Your Order"/>
        <table className='w-1/3 table-fixed text-left border border-collapse border-spacing-1'>
            <thead>
            <tr >
                <th className='border  pl-2'><PortionHeading text="Product" className=" border-separate"/>
                </th>
                <th className='border  pl-2'>
                <PortionHeading text="Total" className="font-normal text-grey-white"/>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className='border  pl-2 font-bold text-black'><p>Product X <span>1</span></p></td>
                <td className='border  pl-2 font-normal text-grey-white'>$343</td>
            </tr>
            <tr>
                <td className='border  pl-2 font-bold text-black'><p>Subtotal</p></td>
                <td className='border  pl-2 font-normal text-grey-white'>$343</td>
            </tr>
            <tr>
                <td className='border  pl-2 font-bold text-black'><p>Total</p></td>
                <td className='border  pl-2 font-normal text-grey-white'>$343</td>
            </tr>
            </tbody>
        </table>    
        </div>

      
    </Container>
        </>
  )
}

export default Checkout