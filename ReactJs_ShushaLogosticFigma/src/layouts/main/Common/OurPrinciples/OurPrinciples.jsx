import React from 'react'
import './OurPrinciples.css'
import Bg from './img/OurPrinciplesBg.png'
import Principleimg1 from './img/Principleimg1.png'
import Principleimg2 from './img/Principleimg2.png'
import Principleimg3 from './img/Principleimg3.png'







function OurPrinciples() {
  return (
    <div className='OurPrinciples-container bg-cover bg-center h-[150vh] p-48' style={{ backgroundImage: `url(${Bg})` }}>
        <p className=' font-poppins font-light text-sm pb-5 text-white'>Prinsiplərimiz</p>
        <h1 className='font-montserrat font-medium  text-5xl text-white pb-5'>Bizim missiyamız</h1>
        <div className='OurPrinciplesBoxs flex flex-wrap gap-3'>
          <div className='OurPrinciplesBox bg-white max-w-[370px] p-10 '>
            <h3 className='text-[rgba(185,4,112,1)] font-montserrat font-medium text-xl pb-5'>Fərdi yanaşma</h3>
            <p className='text-[#343A3E] font-poppins text-sm leading-5 pb-5	'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic</p>
            <img src={Principleimg1} className=' flex  relative left-48'/>

          </div>
          <div className='OurPrinciplesBox bg-white max-w-[370px] p-10 '>
            <h3 className='text-[rgba(185,4,112,1)] font-montserrat font-medium text-xl pb-5'>Fərdi yanaşma</h3>
            <p className='text-[#343A3E] font-poppins text-sm leading-5 pb-5	'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic</p>
            <img src={Principleimg2} className=' flex  relative left-48'/>

          </div>
          <div className='OurPrinciplesBox bg-white max-w-[370px] p-10 '>
            <h3 className='text-[rgba(185,4,112,1)] font-montserrat font-medium text-xl pb-5'>Fərdi yanaşma</h3>
            <p className='text-[#343A3E] font-poppins text-sm leading-5 pb-5	'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic</p>
            <img src={Principleimg3} className=' flex  relative left-32'/>

          </div>

        </div>
    </div>
  )
}

export default OurPrinciples