import React, { useState } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Reservation, SpecialMenu, Testimony} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (

  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Reservation />
    {/*<Menus />
    */}
    <SpecialMenu />
    <Chef />
    <Testimony />
    <Intro />
    <Laurels />
    <Gallery />
    {/* <Blogs /> */}
    <FindUs />
    <Footer />
  </div>
);

export default App;
