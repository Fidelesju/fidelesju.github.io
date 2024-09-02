import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo-my-site-5.png';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ isScrolled }) => (isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent')};
  color: ${({ theme }) => theme.text};
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px; /* Espaçamento à direita da logo para centralizar */

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Logo = styled.img`
  margin-right: 50px; 
  height: 80px;

  @media (max-width: 768px) {
    height: 60px;
    margin-right: 20px;
  }
`;

const NavSocialContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 60px;
    left: ${({ isOpen }) => (isOpen ? '20%' : '-100%')}; /* Ajuste aqui para controlar a posição */
    width: 60%; /* Ajuste aqui para controlar a largura do menu */
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    padding-top: 50px;
    transition: left 0.3s ease-in-out;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-right: 50px;
  }
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media (min-width: 769px) {
    display: none;
  }
`;

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <LogoContainer>
        <Logo src={logo} alt="Julia Fideles Logo" />
      </LogoContainer>
      <HamburgerIcon onClick={toggleMenu}>
        {menuOpen ? <CloseIcon /> : <FaBars />}
      </HamburgerIcon>
      <NavSocialContainer isOpen={menuOpen}>
        <Nav>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>Sobre</a>
          <a href="#services" onClick={toggleMenu}>Serviços</a>
          <a href="#portfolio" onClick={toggleMenu}>Portfólio</a>
          <a href="#blog" onClick={toggleMenu}>Blog</a>
          <a href="#contact" onClick={toggleMenu}>Contato</a>
        </Nav>
        <SocialIcons>
          <a href="https://www.linkedin.com/in/julia-fideles" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/fidelesju" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/fidelesju" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </SocialIcons>
      </NavSocialContainer>
    </HeaderContainer>
  );
}

export default Header;
