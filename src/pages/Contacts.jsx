import React from 'react'
import Container  from '../components/Container'
import SubHeading from '../components/SubHeading'
import Breadcrumb from '../components/Breadcrumb'
import { useSelector } from 'react-redux'
import Flex from '../components/Flex'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import map from '../assets/map.png'
import Image from '../components/Image'


const Contacts = () => {
  const pageName= useSelector((state=>state.breadcrumb.previousname))
  return (
    <>
    <Container>
        {/* top and head part */}
      <SubHeading className="text-49 pb-2.5" text="Contacts"/>
      <Flex className="mb-32"> <Link className='mr-2' to={pageName=="Home"?"/":`/${pageName.toLowerCase()}`}>{pageName}</Link>\ <Breadcrumb>{window.location.pathname.replace(("/"),(" ")).replace(("-"),(" "))}</Breadcrumb>
      </Flex>

      {/* form fillup part */}
      <SubHeading className="mb-10" text="Fill up a Form"/>
      <div className="pb-16">
        <div className='w-1/2'>
        <Input title="Name" placeholder="Your Name Here" type="text" className=""/>
        </div>
        <div className='w-1/2'>
        <Input title="Email" placeholder="Your Email Here" type="email" className="pb-2"/>
        </div>
        <div className='w-1/2'>
        <label className='font-bold font-dm text-base'>Message</label>
        <textarea placeholder='Your Message Here' name="Message" className="resize-none pb-32 whitespace-normal w-full border-b border-solid border-offwhite placeholder:font-normal placeholder:font-dm placeholder:text-sm py-2 mb-6 pl-2"></textarea>
        </div>
        </div>
        <Button text="Post"/>
        <Image src={map} className="w-full mt-36"/>
      
    </Container>
        </>
  )
}

export default Contacts