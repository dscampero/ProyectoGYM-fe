import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import HomePromoBanner from '../components/HomePromoBanner';
import HomeTurnBanner from '../components/HomeTurnBanner';
import Footer from '../components/Footer';

const HomeScreen = () => {
  return <div>
    <HomeNavbar/>
      <HomePromoBanner />
      <HomeTurnBanner/>
      <Footer/>
  </div>;
};

export default HomeScreen;
