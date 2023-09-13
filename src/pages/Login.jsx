import React from 'react'
import Container  from '../components/Container'
import SubHeading from '../components/SubHeading'
import Breadcrumb from '../components/Breadcrumb'
import { useSelector } from 'react-redux'
import Flex from '../components/Flex'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
const Login = () => {
    const pageName= useSelector((state=>state.breadcrumb.previousname))
    return (
      <>
      <Container>
        {/* Top and Head part */}
        <SubHeading className="text-49 pb-2.5" text="Login"/>
        <Flex className="mb-32"> <Link className='mr-2' to={pageName=="Home"?"/":`/${pageName.toLowerCase().replace((" "),("-"))}`}>{pageName}</Link>\ <Breadcrumb>{window.location.pathname.replace(("/"),(" ")).replace(("-"),(" "))}</Breadcrumb>
        </Flex>
        <p className='font-dm font-normal text-base mb-28 leading-8 text-grey-white w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

        {/* Returning Customer Part */}
        <SubHeading className="mb-10" text="Returning Customer"/>
        <Flex className="gap-x-[51px] flex-wrap pb-16 border-solid border-b-2">
          <div className='w-3/8'>
          <Input title="Email address" placeholder="company@domain.com" type="email" className="pb-2"/>
          </div>
          <div className='w-3/8'>
          <Input title="Password" placeholder="••••••••" type="password" className=""/>
          </div>
          <Button text="Log in" className='px-[74px]'/>
          </Flex>

          {/* New customer part */}

        <SubHeading className="mt-16 mb-10" text="New Customer"/>
        <p className='font-dm font-normal text-base mb-12 leading-8 text-grey-white w-1/2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <Button text="Continue"/>
      </Container>
          </>
          )
}

export default Login