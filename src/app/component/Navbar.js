"use client"

import Link from 'next/link'
import React from 'react'
import {useSelector} from 'react-redux'

const Navbar = () => {
    const item = useSelector((state)=> state.cart)
  return (
    <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <span> Redux Nextjs 13.4</span>
            <div>
                <Link className='navlink' style={{fontWeight:"bolder",marginRight:"4px"}} href={"/"}>Home</Link>
                <Link className='navlink' style={{fontWeight:"bolder", marginRight:"7px"}} href={"/cart"}>Cart</Link>
                <span style={{fontWeight:"bolder"}}>item:{item.length}</span>
            </div>

        </div>
    </div>
  )
}

export default Navbar