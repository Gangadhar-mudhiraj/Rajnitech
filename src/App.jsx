import React from 'react';
import WateryDiv from './common/WateryDiv';
import WateryFooter from './common/WateryFooter';
import Header from './components/Header';
import Faqs from './components/Faqs';
import ClientReviews from './components/ClientReview';
import ContactUs from './components/Contactus';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="app bg-[#000428] z-[100] sticky top-0  z-[999]">
      <Navbar />
      <header>
        <WateryDiv />
        <section id="banner" className='top-[-16]'>
          <Header />
        </section>
      </header>

      <main className="flex-grow">



        <section id="About" className="min-h-screen bgtheme">
          <About />
        </section>


        <section id="Services" className="min-h-screen bg-gray-100">
          <Services />
        </section>
        <section id="Portfolio" className="min-h-screen ">
          <Portfolio />
        </section>



        <section id="Contact" className="min-h-screen  bg-gray-100">
          <ContactUs />
        </section>
        <section id="clients"></section>

      </main>

      <footer className="text-white text-center">
        <section id="faq">
          <ClientReviews />
          <Faqs />
        </section>
        <WateryFooter />
      </footer>
    </div>
  );
};

export default App;