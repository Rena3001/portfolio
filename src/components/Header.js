import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {MdOutlineMenuBook} from 'react-icons/md'
import RespMenu from './RespMenu.js'
import {FaTimesCircle} from "react-icons/fa"
export default function Header() {
    const [click,setClick]=useState(false)
    const handleMenuClick=()=>{
        setClick(!click)
    }
    return (
        <div className='header'>
            <div className='logo'><h1>Rena</h1></div>
            <div>
                <ul className="header-menu">
                    <li><Link className='header-menu_link' to="/">Home</Link></li>
                    <li><Link className='header-menu_link' to="/about">About</Link></li>
                    <li><Link className='header-menu_link' to="/project">Project</Link></li>
                    <li><Link className='header-menu_link' to="/contact">Contact</Link></li>
                </ul>
                {
                    click ? <FaTimesCircle color='white' className='menu-btn' onClick={handleMenuClick}/>    :
                    <MdOutlineMenuBook  color='white' className='menu-btn' onClick={handleMenuClick}/> 
                }
                
                
            </div>
            {
                click? (<RespMenu/>):null
            }
        </div>
    )
}
