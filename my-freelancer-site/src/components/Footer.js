import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background}; /* Cor de fundo do footer */
  padding: 20px;
  color: ${({ theme }) => theme.text};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Julia Fideles. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}

export default Footer;
