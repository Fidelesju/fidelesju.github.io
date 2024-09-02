import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import postsData from '../posts.json'; // Importa o JSON

const BlogSection = styled.section`
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  position: relative; /* Necessário para posicionar o NumberBox */
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

const BlogTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text};
`;

const PostsContainer = styled.div`
  display: flex;
  overflow: hidden; 
  justify-content: center;
  align-items: center;
  touch-action: pan-y; /* Permite rolagem vertical e gestos horizontais */
`;

const PostCard = styled.a`
  flex: 0 0 300px; 
  background-color: ${({ theme }) => theme.accent};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  margin: 0 10px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PostInfo = styled.div`
  padding: 20px;
`;

const PostTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.background};
`;

const PostDate = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
`;

const PostExcerpt = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

const NavButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 10px;
  margin: 0 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 5px;
    margin: 0 5px;
  }
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const postsPerPage = 3;

  useEffect(() => {
    setPosts(postsData);
  }, []);

  const nextPosts = () => {
    if (currentIndex + postsPerPage < posts.length) {
      setCurrentIndex(currentIndex + postsPerPage);
    }
  };

  const prevPosts = () => {
    if (currentIndex - postsPerPage >= 0) {
      setCurrentIndex(currentIndex - postsPerPage);
    }
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setCurrentX(touch.clientX);
  };

  const handleTouchEnd = () => {
    if (startX - currentX > 50) {
      nextPosts();
    } else if (currentX - startX > 50) {
      prevPosts();
    }
  };

  return (
    <BlogSection id="blog">
      <NumberBox>
        <Number>05</Number>
      </NumberBox>
      <BlogTitle>Blog</BlogTitle>
      <PostsContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {currentIndex > 0 && (
          <NavButton onClick={prevPosts}>
            <FaArrowLeft />
          </NavButton>
        )}
        {posts.slice(currentIndex, currentIndex + postsPerPage).map((post, index) => (
          <PostCard 
            key={index} 
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PostImage src={post.image} alt={post.title} />
            <PostInfo>
              <PostTitle>{post.title}</PostTitle>
              <PostDate>{post.date}</PostDate>
              <PostExcerpt>{post.excerpt}</PostExcerpt>
            </PostInfo>
          </PostCard>
        ))}
        {currentIndex + postsPerPage < posts.length && (
          <NavButton onClick={nextPosts}>
            <FaArrowRight />
          </NavButton>
        )}
      </PostsContainer>
    </BlogSection>
  );
};

export default Blog;
