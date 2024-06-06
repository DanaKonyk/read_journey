import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import color from 'stylesheet/GlobalColors';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Road = styled(motion.div)`
  background-color: #333;
  width: 100%;
  height: 2px;
  position: absolute;
  top: 50%;
`;

const Text = styled(motion.h1)`
  color: white;
  font-size: 24px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const StyledLink = styled(Link)`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  color: ${color.grey};
  transition: color 350ms linear;

  &:hover,
  &:focus {
    color: ${color.hoverWhite};
  }
`;

const Homepage = () => {
  return (
    <Container>
      {[...Array(20)].map((_, index) => (
        <Road
          key={index}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0.2 }}
          transition={{ delay: index * 0.1, duration: 2 }}
        />
      ))}
      <Text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 2 }}
      >
        Your READ JOURNEY is starting now.
        <br />
        Just use <StyledLink to="/register">Register</StyledLink> or{' '}
        <StyledLink to="/login">Login</StyledLink> to authorize
      </Text>
    </Container>
  );
};

export default Homepage;
