import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import heroImage from '../assets/1.jpg';

const HeroSection = styled.section`
  height: 100vh; /* Ocupa 100% da altura da janela do navegador */
  width: 100vw; /* Ocupa 100% da largura da janela do navegador */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.text};
  text-align: center;
  padding: 0; /* Remove qualquer padding que possa afetar o layout */
  margin: 0; /* Remove qualquer margem que possa afetar o layout */
  position: relative;
  overflow: hidden; /* Impede qualquer overflow */
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TypingText = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  height: 2rem;
  white-space: nowrap;
  border-right: 3px solid ${({ theme }) => theme.accent};
  overflow: hidden;
  animation: blink-caret 0.75s step-end infinite;

  @keyframes blink-caret {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: ${({ theme }) => theme.accent};
    }
  }
`;

function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    'Desenvolvedora Full-Stack',
    'Especialista em SEO',
    'Desenvolvedora Web',
    'Desenvolvedora Mobile'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[loopNum % texts.length];
      const updatedText = isDeleting
        ? currentText.substring(0, displayedText.length - 1)
        : currentText.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 30 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, typingSpeed, loopNum]);

  return (
    <HeroSection id="home">
      <HeroTitle>Julia Fideles</HeroTitle>
      <TypingText>{displayedText}</TypingText>
    </HeroSection>
  );
}

export default Hero;
