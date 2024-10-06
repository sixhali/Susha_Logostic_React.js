import React from 'react'
import './HeaderTop.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function HeaderTop() {
  return (
       <div className='HeaderTop-Container bg-[rgba(185,4,112,1)]' >
          <div className=' HeaderTop-Content flex m-auto max-w-[1190px] justify-between items-center p-5 '>
            <div className='HeaderTitle flex gap-16 font-normal text-white  '>
             <a href='#'>(+994) 12 345 67 89</a>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
         
           <div className='flex text-white gap-5 mt-2'>
             <a href='#'><IoLogoWhatsapp className='text-xl'/></a>
             <a href='#'><AiFillInstagram className='text-xl'/></a>
             <a href='#'><MdEmail className='text-xl'/></a>
            </div>
          </div>
      </div>
  )
}

export default HeaderTop