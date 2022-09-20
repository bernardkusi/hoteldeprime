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
            <a href="#">Our&nbsp;Services</a>
            <a href="#">Our&nbsp;Blog</a>
        </ul>

        <div className="bars" onClick={togglenav}>
            <div className="bar"></div>
        </div>
    </nav>
  )
}

export default Nav