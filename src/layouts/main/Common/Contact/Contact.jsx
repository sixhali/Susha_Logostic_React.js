import React from 'react'
import './contact.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";




function Contact() {
  return (
    <div id='contact' className='Conatact_Container flex items-center justify-around'>
      <div className=' text1 p-10'>
       <p className='text-[rgba(185,4,112,1)] font-poppins font-normal text-sm pb-2'>Əlaqə</p>
       <h4 className=' font-montserrat font-medium text-5xl text-[#343A3E] pb-6'>Bizə yaz</h4>
        <p className=' font-poppins text-sm text-[#343A3E] max-w-[467px] pb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took</p>
      </div>
      <div className='text2 bg-white p-20 mt-20'
      style={{ boxShadow: '0px 0px 15px 0px #77777740' }}>
          <p className=' max-w-[487px] font-poppins text-lg mb-10'>Lorem Ipsum is simply dummy text of the printing
          Baki, Azərbaycan </p>
          <p className='mb-10'>+994 (51) 123 45 67</p>
          <div className='icons text-[rgba(185,4,112,1)] flex gap-4 text-2xl'>
            <a href="#"><IoLogoWhatsapp/></a>
            <a href="#"><RiInstagramFill/></a>
            <a href="#"><MdEmail/></a>
          </div>
      </div>
    </div>
  )
}

export default Contact