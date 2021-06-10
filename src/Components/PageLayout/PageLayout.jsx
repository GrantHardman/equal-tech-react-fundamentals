import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './styles.css';

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
