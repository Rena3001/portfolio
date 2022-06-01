import React from 'react'
import {SiGmail} from 'react-icons/si'
import {BsGithub} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import { Link } from 'react-router-dom'
export default function Contact() {
  return (
    <div  className='total' style={{width:"100%"}}>
    <div className='contact-menu' >
    <div style={{}}>
     <span className='contact'> You can contact with me</span>
        <div className='social-media'>
       <span> <br/><Link className='contact-app' target="_blank" to="mailto:verdiyevarana@gmail.com"><SiGmail/>verdiyevarana@gmail.com</Link></span> 
       <span> <Link className='contact-app' target="_blank" to="github.com/Rena3001/"><BsGithub/>https://github.com/Rena3001/</Link></span>
       <span> <Link  className='contact-app' to="/"><BsWhatsapp/>070-256-50-00</Link></span>
        </div>
        </div>
        </div>
        </div>
  )
}
