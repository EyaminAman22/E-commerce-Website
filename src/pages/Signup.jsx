import Container  from '../components/Container'
import React from 'react'
import SubHeading from '../components/SubHeading'
import Breadcrumb from '../components/Breadcrumb'
import { useSelector } from 'react-redux'
import Flex from '../components/Flex'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import Button from '../components/Button'


const Signup = () => {
  const pageName= useSelector((state=>state.breadcrumb.previousname))
  return (
    <>
    <Container>
      {/* head and top part */}
      <SubHeading className="text-49 pb-2.5" text="Sign up"/>
      <Flex className="pb-32"> <Link className='mr-2' to={pageName=="Home"?"/":`/${pageName.replace((" "),("").toLowerCase())}`}>{pageName}</Link>\ <Breadcrumb>{window.location.pathname.replace(("/"),(" ")).replace(("-"),(" "))}</Breadcrumb>
      </Flex>
      <p className='font-dm font-normal text-base mb-28 leading-8 text-grey-white w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

      {/* personal details part */}
      <SubHeading className="mb-10" text="Your Personal Details"/>
      <Flex className="gap-x-[51px] flex-wrap pb-16 border-solid border-b-2">
        <div className='w-3/8'>
        <Input title="First Name" placeholder="First Name" type="text" className=""/>
        </div>
        <div className='w-3/8'>
        <Input title="Last Name" placeholder="Last Name" type="text" className="pb-2"/>
        </div>
        <div className='w-3/8'>
        <Input title="Email address" placeholder="company@domain.com" type="email" className="pb-2"/>
        </div>
        <div className='w-3/8'>
        <Input title="Telephone" placeholder="your phone number" type="number" className="pb-2"/>
        </div>
        </Flex>

        {/* new customer part */}
        <SubHeading className="mt-16 mb-10" text="New Customer"/>
      <Flex className="gap-x-[51px] flex-wrap pb-16 border-solid border-b-2" >
        <div className='w-3/8'>
        <Input title="Address 1" placeholder="4279 Zboncak Port Suite 6212 Name" type="text" className=""/>
        </div>
        <div className='w-3/8'>
        <Input title="Address 2" placeholder="-" type="text" className="pb-2"/>
        </div>
        <div className='w-3/8'>
        <Input title="City" placeholder="Your City" type="text" className="pb-2"/>
        </div>
        <div className='w-3/8'>
        <Input title="Post Code" placeholder="05228" type="number" className="pb-2"/>
        </div>
        <div className='w-3/8'>
        <Input title="Country" placeholder="company@domain.com" type="text" className="pb-2"/>
        </div>
        <div className='w-3/8'>
        <Input title="Region/State" placeholder="Please Select" type="text" className="pb-2"/>
        </div>
      </Flex>
      
        {/* password part */}
      <SubHeading className="mt-16 mb-10" text="Your Password"/>
      <Flex className="gap-x-[51px] flex-wrap pb-16 border-solid border-b-2">
        <div className='w-3/8'>
        <Input title="Password" placeholder="Password" type="password" className=""/>
        </div>
        <div className='w-3/8'>
        <Input title="Repeat Password" placeholder="Repeat Password" type="password" className="pb-2"/>
        </div>
      </Flex>

      {/* radio button part */}
      <input id='test' type='checkbox' className='peer/test' hidden/>
            <label className='mt-16 text-grey-white relative mt-10 inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-black before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:h-2 after:peer-checked/test:border after:peer-checked/test:border-solid after:peer-checked/test:border-white after:absolute after:top-2 after:left-0.5 after:content[""] after:peer-checked/test:bg-black' for='test'>
            I have read and agree to the Privacy Policy
            </label>
            
      <Flex className="items-center my-6 text-grey-white">
      Subscribe Newsletter
      <input id='test2' type='checkbox' className='peer/test2' hidden/>
            <label className='relative mt-10 inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-black before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:h-2 after:peer-checked/test2:border after:peer-checked/test2:border-solid after:peer-checked/test2:border-white after:absolute after:top-2 after:left-0.5 after:content[""] after:peer-checked/test2:bg-black' for='test2'>
            Yes
            </label>
            <input id='test3' type='checkbox' className='peer/test3' hidden/>
            <label className='relative mt-10 inline-block pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-black before:absolute before:top-1.5 before:left-0 before:content[""]  after:w-2 after:h-2 after:peer-checked/test3:border after:peer-checked/test3:border-solid after:peer-checked/test3:border-white after:absolute after:top-2 after:left-0.5 after:content[""] after:peer-checked/test3:bg-black' for='test3'>
            No
            </label>
      </Flex>
      <Button text="Log in"/>
    </Container>
        </>
  )
}

export default Signup