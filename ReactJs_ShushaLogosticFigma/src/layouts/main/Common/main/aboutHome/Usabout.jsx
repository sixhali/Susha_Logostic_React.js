import React from 'react'
import './Usabout.css'
import UsAboutImg from './img/UsAboutBg.svg'

function Usabout() {
  return (
    <div className='Usabout-container'>
        <div className='Usabout-content'>
            <div className='Usabout-content-text'>
                <div className='Usabout-content-text-1'>
                  <p>Haqqımızda</p>
                  <h4>Biz kimik?</h4>
                </div>
                <div className='Usabout-content-text-2'>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                   when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries,
                  but also the leap into electronic typesetting,
                  remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                 </p>  
                </div>
            </div>

            <img src={UsAboutImg} alt="" />

            <p className='text3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries,
                but also the leap into electronic typesetting,
                remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    </div>
  )
}

export default Usabout