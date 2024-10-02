import React, { useState } from 'react'
import './Banner.css'
import ShushaLogosticLogo from './Img/ShushaLogosticLogo.svg'; 
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import BgImageBanner from "./Img/BannerBg.svg"

function Banner() {

  const [isOpen , isSetOpen] = useState(false)

  const toggleMenu=()=>{
    isSetOpen(!isOpen)
  
      
  }

  return (
    <div className={`Banner-Container bg-cover bg-center bg-no-repeat p-5`}
    style={{backgroundImage:`url(${BgImageBanner})`}}>
      <div className='Banner-Nav bg-white font-poppins flex justify-between items-center relative max-w-[1200px] m-auto p-10 '>
        <img src={ShushaLogosticLogo} alt="" />
        <div className='Nav-links flex  items-center gap-10'>
          <a href='#' className='text-[(#525252)] font-poppins font-light text-2xl'>Ana səhifə</a>
          <a href='#' className='text-[(#525252)] font-poppins font-light text-2xl'>Xidmətlər</a>
          <a href='#' className='text-[(#525252)] font-poppins font-light text-2xl'>Haqqımızda</a>
          <a href='#' className='text-[(#525252)] font-poppins font-light text-2xl'>Əlaqə</a>
        </div>
        <div className='hamburger-icons' onClick={toggleMenu}>
          {isOpen ? (
                <IoMdClose onClick={toggleMenu} className='colseIcon'/>
          ):(<GiHamburgerMenu className='icon'/>)}
            <div className='md-navparent'>
             {isOpen && (<div className='md-nav'> 
               <a href='#'>Ana səhifə</a>
               <a href='#'>Xidmətlər</a>
               <a href='#'>Haqqımızda</a>
               <a href='#'>Əlaqə</a>
             </div>)}
            </div>
        </div> 
        <div className='Nav-linksBtn'>
         <a href={'#'} className='bg-[rgba(185,4,112,1)] pt-6 pb-6 pl-20 pr-20 font-poppins text-white'>Əlaqə</a>
        </div>
      </div>
      <div className='Nav-TextBtn flex flex-col gap-10 max-w-[1200px] mb-10 mt-10 ml-auto mr-auto'>
        <h2 className='font-montserrat text-7xl font-semibold	tracking-normal text-white'>Shusha logistics</h2>
        <h6 className='font-poppins font-normal text-3xl text-white'>Tez və daha effektli</h6>
        <p className='font-poppins font-normaltext-white text-base max-w-[549px] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <a href='#' className='text-center bg-[rgba(185,4,112,1)] pt-4 pb-4 pl-2 pr-2 max-w-[224px] text-white text-base'>
            Əlaqə
          </a>
          
      </div>

    </div>
  )
}

export default Banner