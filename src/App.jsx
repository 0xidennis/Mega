import React from 'react';
import Home from './Page/Home';
import ApplicOne from './loanform/ApplicOne';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoanService from './Component/LoanService';
import About from './Component/About';
import Header from './Static/Header';
import Footer from './Static/Footer';
import { useEffect } from 'react';
import ApplicTwo from './loanform/ApplicTwo'
import ApplicThre from './loanform/ApplicThre'

const Layout = ({ children }) => {
  const location = useLocation();
  const hiddenRoutes = ['/get-started'];
  const hideHeaderFooter = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    // If no hash, scroll to top
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Small timeout to ensure components are rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <ScrollToAnchor />
        <Routes>
          <Route path="/" element={
            <>
              <Home id="home" />
              <LoanService id="loans" />
              <About id="about" />
            </>
          }/>
          <Route path="/get-started" element={<ApplicOne />} />
          
          {/* Handle direct navigation to /loans or /about */}
          <Route path="/loans" element={
            <>
              <Home id="home" />
              <LoanService id="loans" />
              <About id="about" />
            </>
          } />
          <Route path="/about" element={
            <>
              <Home id="home" />
              <LoanService id="loans" />
              <About id="about" />
            </>
          } />
        </Routes>
      </Layout>
    
    </BrowserRouter>
    {/* <ApplicTwo/>
    <ApplicThre/> */}
    </>
  )
}

export default App;