import React from 'react'
import Image from '../components/Image'
import error from '../assets/error.png'
import Container from '../components/Container'
import PortionHeading from '../components/PortionHeading'
import Input from '../components/Input'
import {HiMagnifyingGlass} from 'react-icons/hi2'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
const Errorpage = () => {
  return (
    <section className='pt-20 pb-36'>
        <Container>
            <div className='w-1/2'>
            <div>
            <Image src={error}/>
            <PortionHeading className='pt-12 leading-8 font-normal text-grey' text={`The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?`}/>
            </div>
            <div className='justify-center relative mt-12'>
                <Input className="w-full py-4 px-5 " placeholder="Search Products" />
                <HiMagnifyingGlass className='absolute top-1/2 -translate-y-1/2 right-4  text-2xl'/>
            </div>
            <Link to="/">
            <Button className='mt-16' text="Back To Home"/>
            </Link>
            </div>
        </Container>
    </section>
  )
}

export default Errorpage