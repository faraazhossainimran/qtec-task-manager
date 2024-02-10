import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../../../components/NavBar/NavBar';
import About from '../About/About';
import SignUpBanner from '../../../components/SignUpBanner/SignUpBanner';

function Home() {


  return (
    <div>
        <NavBar></NavBar>
     <Banner></Banner>
     <About></About>
     <SignUpBanner></SignUpBanner>
    </div>
  );
}

export default Home;