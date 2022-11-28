import React from 'react'
import NavLink from 'next/link'

const Nav = ({togglenav,navopen}) => {
  return (
     <>
        <div className="links">
            Call us now :
            (<ul>
                <a href="tel:+233592724408">+233592724408</a>/
                <a href="tel:+233592724408">+233592724408</a>
            </ul>)
        </div>
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
            <NavLink activeClassName="active" href="/">Home</NavLink>
            <NavLink activeClassName="active" href="/rooms">Our&nbsp;Rooms</NavLink>
            <NavLink activeClassName="active" href="/about">About&nbsp;Us</NavLink>
            <NavLink activeClassName="active" href="/services">Our&nbsp;Services</NavLink>
            <NavLink activeClassName="active" href="/contact">Contact&nbsp;Us</NavLink>
        </ul>

        <div className="bars" onClick={togglenav}>
            <div className="bar"></div>
        </div>
    </nav></>
  )
}

export default Nav