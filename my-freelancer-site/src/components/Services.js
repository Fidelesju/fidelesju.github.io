import React from 'react';
import styled from 'styled-components';
import { FaCode, FaSearch, FaMobileAlt, FaSitemap } from 'react-icons/fa';

const ServicesSection = styled.section`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.second};
  color: ${({ theme }) => theme.text};
  text-align: center;
  position: relative;
`;

const NumberBox = styled.div`
  background-color: #00b8e4; /* Cor do fundo do quadrado */
  color: white; /* Cor do texto */
  padding: 20px 40px;
  margin-top: 25px;
  position: absolute;
  top: -35px; /* Ajusta a posição vertical conforme necessário */
  left: 50%;
  transform: translateX(-50%); /* Centraliza horizontalmente */
  text-align: center;
  font-weight: bold;
  z-index: 1; /* Garante que o quadrado fique sobre os outros elementos */
`;

const Number = styled.div`
  font-size: 2rem;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 40px;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const ServiceItem = styled.div`
  background-color: ${({ theme }) => theme.second};
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, border-color 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-color: white;
    border-top-right-color: white;
    border-bottom-left-color: white;
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 15px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

function Services() {
  return (
    <ServicesSection id="services">
      <NumberBox>
        <Number>02</Number> {/* Altere o número conforme necessário */}
      </NumberBox>
      <ServicesTitle>Meus Serviços</ServicesTitle>
      <ServicesGrid>
        <ServiceItem>
          <ServiceIcon>
            <FaCode />
          </ServiceIcon>
          <ServiceTitle>Criação de sites</ServiceTitle>
          <ServiceDescription>
            Criação de sites modernos e responsivos utilizando as melhores práticas e tecnologias do mercado.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon>
            <FaSearch />
          </ServiceIcon>
          <ServiceTitle>SEO</ServiceTitle>
          <ServiceDescription>
            Otimização de sites para motores de busca, garantindo melhor visibilidade e posicionamento no Google.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <ServiceIcon>
            <FaMobileAlt />
          </ServiceIcon>
          <ServiceTitle>Desenvolvimento de Aplicativos</ServiceTitle>
          <ServiceDescription>
            Criação de aplicativos móveis para Android, focados em usabilidade e desempenho.
          </ServiceDescription>
        </ServiceItem>
      </ServicesGrid>
      <ServicesGrid>
        <ServiceItem>
          <ServiceIcon>
            <FaSitemap />
          </ServiceIcon>
          <ServiceTitle>Desenvolvimento Back-End</ServiceTitle>
          <ServiceDescription>
            Desenvolvimento de APIs robustas e seguras para sustentar suas aplicações.
          </ServiceDescription>
        </ServiceItem>
      </ServicesGrid>
    </ServicesSection>
  );
}

export default Services;
