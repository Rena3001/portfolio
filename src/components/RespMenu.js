import React from 'react'
import { Link } from 'react-router-dom'

export default function RespMenu() {
  return (
    <ul className="resp-menu">
    <li><Link className='header-menu_link' to="/">Home</Link></li>
    <li><Link className='header-menu_link' to="/about">About</Link></li>
    <li><Link className='header-menu_link' to="/project">Project</Link></li>
    <li><Link className='header-menu_link' to="/contact">Contact</Link></li>
</ul>
  )
}
