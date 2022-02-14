import React from 'react';
import Nav from '../../Shared/Nav/Nav';
import AppoientmentBanner from '../AppoientmentBanner/AppoientBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Nav />
      <Banner />
      <Services />
      <AppoientmentBanner />
    </div>
  );
};

export default Home;