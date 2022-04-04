import React from 'react';
import { Navbar, Footer } from './index';

const LandingLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default LandingLayout;
