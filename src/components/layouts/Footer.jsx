import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import List from '../List'
import PortionHeading from '../PortionHeading'
import SubHeading from '../SubHeading'
import Image from '../Image'
import logo from '../../assets/logo.png'
import {FaFacebookF} from 'react-icons/fa'
import {BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <>
    <section className='bg-ash pt-14 mt-36'>
     <Container>
        <Flex>
            <div className='w-2/12 '>
                <PortionHeading text="MENU " className='pb-4'/>
            <ul className='gap-y-1.5 flex flex-col text-grey'>
                    <List text='Home'/>
                    <List text='Shop'/>
                    <List text='About'/>
                    <List text='Contact'/>
                    <List text='Journal'/>
                </ul>
            </div>
            <div className='w-2/12'>
            <PortionHeading text="SHOP " className='mb-4'/>
            <ul className='gap-y-1.5 flex flex-col text-grey'>
                    <List text='Category 1'/>
                    <List text='Category 2'/>
                    <List text='Category 3'/>
                    <List text='Category 4'/>
                    <List text='Category 5'/>
                </ul>
            </div>
            <div className='w-2/12'>
            <PortionHeading text="HELP " className='mb-4'/>
            <ul className='gap-y-1.5 flex flex-col text-grey'>
                    <List text='Privacy Policy'/>
                    <List text='Terms & Conditions'/>
                    <List text='Special E-shop'/>
                    <List text='Shipping'/>
                    <List text='Secure Payments'/>
                </ul>
            </div>
            <div className='w-4/12'>
                <PortionHeading text='(052) 611-5711'/>
                <PortionHeading className="mb-4" text='company@domain.com'/>
                <PortionHeading className='text-grey text-sm font-normal' text='575 Crescent Ave. Quakertown, PA 18951'/>

            </div>
            <div className='w-1/6  justify-end'>
                <Image src={logo}/>
            </div>
        </Flex>
    </Container>   
    </section> 
    <section className='bg-ash py-14'>
        <Container>
            <Flex className='justify-between'>
                <Flex className='w-1/5 gap-x-6'>
                <FaFacebookF/><BiLogoLinkedin/><AiOutlineInstagram/>
                </Flex>
                <PortionHeading className='w-1/6 flex justify-end text-sm font-normal' text='2020 Orebi Minimal eCommerce Figma Template by Adveits'/>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Footer