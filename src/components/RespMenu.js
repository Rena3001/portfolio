import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
export default function RespMenu() {
  const menu = useRef()
  return (
    <ul ref={menu} className="resp-menu">
      <li><Link className='header-menu_link' onClick={() => {
        menu.style.display = "none"
      }} to="/">Home</Link></li>
      <li><Link className='header-menu_link' onClick={() => {
        menu.style.display = "none"
      }} to="/about">About</Link></li>
      <li><Link className='header-menu_link' onClick={() => {
        menu.style.display = "none"
      }} to="/project">Project</Link></li>
      <li><Link className='header-menu_link' onClick={() => {
        menu.style.display = "none"
      }} to="/contact">Contact</Link></li>
    </ul>
  )
}
