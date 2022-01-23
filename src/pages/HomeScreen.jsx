import React from 'react';
import HomeNavbar from '../components/HomeNavbar';
import HomePromoBanner from '../components/HomePromoBanner';
import HomeTurnBanner from '../components/HomeTurnBanner';

const HomeScreen = () => {
  return <div>
    <HomeNavbar/>
      <HomePromoBanner />
      <HomeTurnBanner/>
  </div>;
};

export default HomeScreen;
