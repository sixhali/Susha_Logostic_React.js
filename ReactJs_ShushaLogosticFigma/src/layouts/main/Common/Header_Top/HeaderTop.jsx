import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderTop.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function HeaderTop() {
  return (
       <div className='HeaderTop-Container'>
          <div className='HeaderTop-Content'>

            <div className='HeaderTitle'>
             <Link to={'#'}>(+994) 12 345 67 89</Link>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
         
           <div className='Header-icons'>
             <Link to={'#'}><IoLogoWhatsapp/></Link>
             <Link to={'#'}><AiFillInstagram/></Link>
             <Link to={'#'}><MdEmail/></Link>
 
            </div>

          </div>
      </div>
  )
}

export default HeaderTop