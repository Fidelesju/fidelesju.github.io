import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats'; 
import Blog from './components/Blog';  
import Contact from './components/Contact';
import Footer from './components/Footer';
import Services from './components/Services';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25D366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #128C7E;
  }
`;

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats /> 
      <Blog /> 
      <Contact />
      <Footer />
     
      <WhatsappButton
        href="https://wa.me/5585992345671" // Substitua pelo seu número de telefone com código do país e DDD
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </WhatsappButton>
    </div>
  );
}

export default App;
