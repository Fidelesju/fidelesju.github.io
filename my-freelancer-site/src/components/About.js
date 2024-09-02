import React, { useEffect } from 'react';
import styled from 'styled-components';
import aboutImage from '../assets/julia.png';

const AboutSection = styled.section`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  gap: 50px;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 20px; /* Ajusta o padding em telas menores */
    gap: 20px; /* Reduz o espaço entre os elementos */
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 45%;
  padding-right: 20px;
  margin-top: 100px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
    margin-top: 100px;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const NumberBox = styled.div`
  background-color: #00b8e4;
  color: white;
  padding: 20px 40px;
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-weight: bold;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 15px 30px; /* Reduz o tamanho do box em telas menores */
    top: -15px; /* Ajusta a posição do box em telas menores */
  }
`;

const Number = styled.div`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduz o tamanho da fonte em telas menores */
  }
`;

const TitleText = styled.h2`
  font-size: 2.5rem;
  margin-top: 45px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 2rem; /* Reduz o tamanho da fonte em telas menores */
    margin-top: 30px; /* Ajusta a margem superior em telas menores */
  }
`;

const AboutImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 80%; /* Reduz o tamanho da imagem em telas menores */
    margin-top: 20px; /* Adiciona margem superior para espaçamento */
  }
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Reduz o tamanho da fonte em telas menores */
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  text-align: justify;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* Reduz o tamanho da fonte em telas menores */
  }
`;

function About() {
  useEffect(() => {
    document.title = "Julia Fideles";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Saiba mais sobre Julia, engenheira da computação com experiência em desenvolvimento de aplicativos e sites."
      );
  }, []);

  return (
    <AboutSection id="about">
      <NumberBox>
        <Number>01</Number>
      </NumberBox>
      <TitleText>Sobre</TitleText>

      <LeftColumn>
        <AboutTitle>Julia Fideles</AboutTitle>
        <AboutText>
          Sou uma engenheira da computação e desenvolvedora com mais de 4 anos de experiência no mercado, movida pela paixão por criar soluções que realmente façam a diferença na vida das pessoas. Ao longo da minha trajetória, tenho buscado aliar tecnologia e propósito, desenvolvendo projetos que combinam inovação com impacto positivo.
        </AboutText>
        <AboutText>
          Um exemplo disso é o <strong>MediMax</strong>, um projeto que desenvolvi para auxiliar no gerenciamento de medicamentos, especialmente para idosos e pessoas com necessidades especiais. O MediMax é uma plataforma que integra software e hardware para garantir que a administração de medicamentos seja feita de forma precisa e segura. O projeto envolve desde o desenvolvimento do software, que gerencia horários e dosagens, até o protótipo de hardware, que automatiza a distribuição dos medicamentos.
        </AboutText>
        <AboutText>
          Tenho uma profunda dedicação em me manter atualizada com as tendências do mercado e em explorar novas tecnologias, sempre buscando formas de aprimorar minhas habilidades e oferecer soluções cada vez mais eficazes. O que me motiva é saber que o que crio pode, de fato, transformar a vida das pessoas, trazendo mais facilidade, segurança e qualidade em suas rotinas.
        </AboutText>
        <AboutText>
          Essa busca constante por inovação e qualidade é o que define meu trabalho, e estou sempre pronta para novos desafios que me permitam continuar evoluindo e impactando o mundo através da tecnologia.
        </AboutText>
      </LeftColumn>

      <RightColumn>
        <AboutImage src={aboutImage} alt="Julia Fideles" />
      </RightColumn>
    </AboutSection>
  );
}

export default About;
