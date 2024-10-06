import React from 'react'
import './Footer.css'
import FooterBg from './img/FooterBg.png'
import FooterLogo from '../Banner/Img/ShushaLogosticLogo.svg';
import overlayBg from './img/FooterBgOverlay.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className='Footer_container p-10 bg-cover bg-no-repeat bg-center flex justify-center items-center h-[150vh] relative' style={{backgroundImage:`url(${FooterBg})`}}>
        <footer className='bg-white flex  gap-10 pt-10 pb-10 pl-5 pr-5 rounded-lg	'>
            <div className='FooterLogo'>
                <img src={FooterLogo} alt="" /> 
            </div>
            <div className='Links text-[rgba(185,4,112,1)] flex flex-col gap-3'>
                <a className=' font-poppins font-normal text-sm' href="#">Ana səhifə</a>
                <a className=' font-poppins font-normal text-sm' href="#">Xidmətlər</a>
                <a className=' font-poppins font-normal text-sm' href="#">Haqqımızda</a>
                <a className=' font-poppins font-normal text-sm' href="#">Əlaqə</a>
            </div>
            <div className='ContactInfermation flex flex-col gap-5 text-[rgba(185,4,112,1)] '>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <a href="#">(+994) 12 345 67 89</a>
              <a href="#">info@shushalogistics.az</a>
            </div>
            <div className='icons flex flex-col gap-5 text-[rgba(185,4,112,1)] text-2xl'>
             <a href="#"><IoLogoWhatsapp/></a>
             <a href="#"><RiInstagramFill/></a>
             <a href="#"><MdEmail/></a>
            </div>
        </footer>
        <div className='OverlayBg absolute bottom-0 '>
            <img src={overlayBg} alt="" />

        </div>

    </div>
  )
}

export default Footer