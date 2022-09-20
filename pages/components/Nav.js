import React from 'react'
import Link from 'next/link'

const Nav = ({togglenav,navopen}) => {
  return (
    <nav className='open'>
        <style jsx>
            {
                `
                .open{
                    height:${navopen?"auto":""}
                }
                `
            }
        </style>
        <a className="logo">Hotel</a>
        <ul>
            <Link href="/">Home</Link>
            <Link href="/rooms">Our&nbsp;Rooms</Link>
            <Link href="/about">About&nbsp;Us</Link>
            <Link href="/services">Our&nbsp;Services</Link>
            <Link href="/contact">Contact&nbsp;Us</Link>
        </ul>

        <div className="bars" onClick={togglenav}>
            <div className="bar"></div>
        </div>
    </nav>
  )
}

export default Nav