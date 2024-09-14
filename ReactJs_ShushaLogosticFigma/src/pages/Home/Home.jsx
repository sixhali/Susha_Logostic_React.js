import React from 'react'
import Banner from '../../layouts/main/Common/Banner/Banner'
import Usabout from '../../layouts/main/Common/main/aboutHome/Usabout'
import Supportspage from '../../layouts/main/Common/main/SupportPage/Supportspage'

function Home() {
  return (
    <div>
      <Banner/>
      <Usabout/>
      <Supportspage/>
    </div>
  )
}

export default Home