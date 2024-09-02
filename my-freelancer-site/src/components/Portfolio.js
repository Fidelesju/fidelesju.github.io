import React, { useState } from 'react';
import styled from 'styled-components';
import image from '../assets/image.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';
import image4 from '../assets/image-4.png';
import image5 from '../assets/image-5.png';
import image6 from '../assets/image-6.png';

const PortfolioSection = styled.section`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  text-align: center;
  position: relative;
`;

const NumberBox = styled.div`
  background-color: #00b8e4;
  color: white;
  padding: 20px 40px;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-weight: bold;
  z-index: 1;
`;

const Number = styled.div`
  font-size: 2rem;
`;

const TitleWrap = styled.div`
  margin-top: 40px;
  margin-bottom: 65px;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const FilterMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap; /* Permite a quebra de linha em telas menores */

  li {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      font-weight: bold;
      cursor: pointer;

      &.current,
      &:hover {
        color: ${({ theme }) => theme.accent};
      }
    }
  }
`;

const PortfolioGrid = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const PortfolioItem = styled.li`
  width: 300px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%; /* Ocupa toda a largura da tela em dispositivos móveis */
  }

  .image_wrap {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
`;

const LightboxOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const LightboxImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  @media (max-width: 768px) {
    max-width: 90%; /* Ajusta o tamanho da imagem em dispositivos móveis */
    max-height: 90%;
  }
`;

const LightboxNav = styled.div`
  position: absolute;
  top: 50%;
  ${({ position }) => (position === 'left' ? 'left: 20px;' : 'right: 20px;')}
  color: white;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Ajusta o tamanho da fonte em dispositivos móveis */
  }
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const portfolioItems = [
    { title: 'Desenvolvimento do Aplicativo para Personal Trainer', image: image, category: 'apps' },
    { title: 'Desenvolvimento do Aplicativo de filmes', image: image2, category: 'apps ' },
    { title: 'Desenvolvimento do Site', image: image3, category: 'sites loja sistemas' },
    { title: 'Desenvolvimento do App', image: image4, category: 'sites loja sistemas' },
    { title: 'Desenvolvimento do App', image: image5, category: 'sites loja sistemas' },
    { title: 'Desenvolvimento do App', image: image6, category: 'apps' }
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(-1);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  return (
    <PortfolioSection id="portfolio">
      <NumberBox>
        <Number>03</Number>
      </NumberBox>
      <TitleWrap>Portfólio</TitleWrap>
      <FilterMenu>
        <li><a href="#!" className={activeFilter === '*' ? 'current' : ''} onClick={() => handleFilterClick('*')}>TODOS</a></li>
        <li><a href="#!" className={activeFilter === 'apps' ? 'current' : ''} onClick={() => handleFilterClick('apps')}>APLICATIVOS</a></li>
        <li><a href="#!" className={activeFilter === 'sites' ? 'current' : ''} onClick={() => handleFilterClick('sites')}>SITES</a></li>
        <li><a href="#!" className={activeFilter === 'sistemas' ? 'current' : ''} onClick={() => handleFilterClick('sistemas')}>SISTEMAS</a></li>
        <li><a href="#!" className={activeFilter === 'loja' ? 'current' : ''} onClick={() => handleFilterClick('loja')}>LOJA VIRTUAL</a></li>
      </FilterMenu>
      <PortfolioGrid>
        {portfolioItems
          .filter(item => activeFilter === '*' || item.category.includes(activeFilter))
          .map((item, index) => (
            <PortfolioItem className={item.category} key={index} onClick={() => openLightbox(index)}>
              <div className="image_wrap">
                <img src={item.image} alt={item.title} title={item.title} />
              </div>
            </PortfolioItem>
          ))}
      </PortfolioGrid>

      {/* Lightbox Overlay */}
      <LightboxOverlay isOpen={lightboxIndex >= 0} onClick={closeLightbox}>
        <LightboxNav position="left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>❮</LightboxNav>
        <LightboxImage src={portfolioItems[lightboxIndex]?.image} alt="" />
        <LightboxNav position="right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>❯</LightboxNav>
      </LightboxOverlay>
    </PortfolioSection>
  );
};

export default Portfolio;
