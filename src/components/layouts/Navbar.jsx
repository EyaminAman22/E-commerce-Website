import Container from '../Container'
import React from 'react'
import Flex from '../Flex'
import Image from '../Image'
import logo from '../../assets/logo.png'
import List from '../List'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { pageName } from '../../slices/Breadcrumbslice'

const Navbar = () => {
    let dispatch=useDispatch()
 let handleBreadCrumb=(name)=>{
    dispatch(pageName(name))
 }
 return (
<>
    <section className='py-8'>
    <Container>
        <Flex>
            <div className='w-1/5'>
                <Image src={logo} alt='logo Orebi'/>
            </div>
            <Flex className='w-3/5 justify-center'>
                <ul className='flex gap-x-10'>
                    <Link onClick={()=>handleBreadCrumb("Home")} to="/">
                    <List text='Home'/>
                    </Link>
                    <Link onClick={()=>handleBreadCrumb("Shop")} to="/shop">
                    <List text='Shop'/>
                    </Link> 
                    <List text='About'/>
                    <Link onClick={()=>handleBreadCrumb("Contacts")} to="/contacts">
                    <List text='Contact'/>
                    </Link>
                    <List text='Journal'/>
                </ul>
            </Flex>
            <div className='1/5'></div>
        </Flex>
    </Container>
    </section>
</>
  )
}

export default Navbar