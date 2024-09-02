import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const StatsSection = styled.section`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.second};
  color: ${({ theme }) => theme.text};
  text-align: center;
  position: relative; /* Necessário para posicionar o NumberBox */
`;

const NumberBox = styled.div`
  background-color: #00b8e4; /* Cor do fundo do quadrado */
  color: white; /* Cor do texto */
  padding: 20px 40px;
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

const StatsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text}; /* Título com cor de destaque */
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  margin: 20px;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
   color: ${({ theme }) => theme.accent};
`;

const StatLabel = styled.div`
  font-size: 1.2rem;
  margin-top: 10px;
  color: ${({ theme }) => theme.text}; /* Texto padrão */
`;

const Stats = () => {
  return (
    <StatsSection>
      <NumberBox>
        <Number>04</Number> {/* Número da seção */}
      </NumberBox>
      <StatsTitle>Meus Números</StatsTitle>
      <StatsContainer>
        <StatItem>
          <StatNumber>
            <CountUp end={200} duration={3} />+
          </StatNumber>
          <StatLabel>Clientes Atendidos</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>
            <CountUp end={500} duration={3} />+
          </StatNumber>
          <StatLabel>Projetos Concluídos</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>
            <CountUp end={10000} duration={3} />+
          </StatNumber>
          <StatLabel>Horas de Desenvolvimento</StatLabel>
        </StatItem>
      </StatsContainer>
    </StatsSection>
  );
};

export default Stats;
