import React, { useState } from 'react'
import './Banner.css'
import ShushaLogosticLogo from './Img/ShushaLogosticLogo.svg'; 
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Banner() {

  const [isOpen , isSetOpen] = useState(false)

  const toggleMenu=()=>{
    isSetOpen(!isOpen)
  
      
  }

  return (
    <div className='Banner-Container'>
      <div className='Banner-Nav'>
        <img src={ShushaLogosticLogo} alt="" />
        <div className='Nav-links'>
          <Link to={'/'}>Ana səhifə</Link>
          <Link to={'/supports'}>Xidmətlər</Link>
          <Link to={'/about'}>Haqqımızda</Link>
          <Link to={'/contact'}>Əlaqə</Link>
        </div>
        <div className='hamburger-icons' onClick={toggleMenu}>
          {isOpen ? (
                <IoMdClose onClick={toggleMenu} className='colseIcon'/>
          ):(<GiHamburgerMenu className='icon'/>)}
            <div className='md-navparent'>
             {isOpen && (<div className='md-nav'> 
               <Link to={'/'}>Ana səhifə</Link>
               <Link to={'/supports'}>Xidmətlər</Link>
               <Link to={'/about'}>Haqqımızda</Link>
               <Link to={'/contact'}>Əlaqə</Link>
             </div>)}
            </div>
        </div> 
        <div className='Nav-linksBtn'>
         <Link to={'#'}>Əlaqə</Link>
        </div>

      </div>

      <div className='Nav-TextBtn'>
        <h2>Shusha logistics</h2>
        <h6>Tez və daha effektli</h6>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <Link to={'#'}>Əlaqə</Link>
          
      </div>

    </div>
  )
}

export default Banner