import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactSection = styled.section`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.second};
  color: ${({ theme }) => theme.text};
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accent};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    width: 75%;
    padding: 12px;
    font-size: 0.9rem;
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
  height: 150px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
  width: 75%;
    padding: 12px;
    font-size: 0.9rem;
    height: 120px; /* Ajuste a altura para telas menores */
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.accent};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.second};
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
  width: 75%;
    padding: 12px 20px;
    font-size: 1.2rem;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #84bc9c;
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  font-size: 1.2rem;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #dc3545;
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  font-size: 1.2rem;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 15px;
  }
`;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isSubmitted || isError) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setIsError(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted, isError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send('service_rlk9yyr', 'template_g01g4o1', templateParams, 'Gn5B8_JLn3uqj9YfY')
      .then(
        (response) => {
          setIsSubmitted(true);
          setIsError(false);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          setIsSubmitted(false);
          setIsError(true);
        }
      );
  };

  return (
    <ContactSection id="contact">
      <ContactTitle>Entre em Contato</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputField
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextAreaField
          placeholder="Mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      </ContactForm>
      {isSubmitted && (
        <SuccessMessage>
          Obrigado por entrar em contato! Sua mensagem foi enviada com sucesso. Vou responder o mais rápido possível.
        </SuccessMessage>
      )}
      {isError && (
        <ErrorMessage>
          Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.
        </ErrorMessage>
      )}
    </ContactSection>
  );
}

export default Contact;
