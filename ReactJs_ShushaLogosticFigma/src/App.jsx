import React from 'react'
import ScrollSpy from 'react-scrollspy';
import HeaderTop from './layouts/main/Common/Header_Top/HeaderTop';
import Banner from './layouts/main/Common/Banner/Banner';
import Usabout from './layouts/main/Common/main/aboutHome/Usabout';
import Supportspage from './layouts/main/Common/main/SupportPage/Supportspage';
import OurPrinciples from './layouts/main/Common/OurPrinciples/OurPrinciples';

function App() {
  return (
    <ScrollSpy>
        <HeaderTop/>
        <Banner id="home"/>
        <Usabout id="about"/>
        <Supportspage id="support"/>
        <OurPrinciples id="principles"/>
    </ScrollSpy>
  )
}

export default App