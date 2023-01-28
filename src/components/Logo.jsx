import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import YourSvg from "../assets/SVG/Logo.svg";

import { motion } from "framer-motion";

const Container = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  /* width: 100%; */
  color: ${(props) => props.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }
`;

const LogoImg = styled(motion.img)`
  width: 6rem;
  height: 6rem;
  background-color: #eee;
  border-radius: 50%;
  border: 2px black solid;
  transition: ease-in-out 0.1s;
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 0.95;
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;

  overflow: hidden;
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    transition: 0.3s ease-in-out;
  }

  &::before {
    background-color: #eee;
    height: 1px;
    bottom: 0.7rem;
    transform-origin: 100% 50%;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
  }

  &::after {
    content: attr(data-replace);
    height: 100%;
    top: 0;
    transform-origin: 100% 50%;
    transform: translate3d(200%, 0, 0);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
    color: #eee;
  }

  &:hover::after,
  &:focus::after {
    transform: translate3d(0, 0, 0);
  }

  &:hover::before,
  &:focus::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }

  span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
  }

  &:hover span {
    transform: translate3d(-200%, 0, 0);
  }
`;

export const Logo = () => {
  const MotionLink = motion(Link);

  const logoVariants = {
    initial: { x: "50vw", y: "50vh", opacity: 1 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: 1, duration: 1.5, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: -5,
      transition: { duration: 1.7, delay: 2.5, ease: "easeInOut" },
    },
  };

  return (
    <Container>
      <MotionLink
        variants={logoVariants}
        initial="initial"
        animate="visible"
        to="/"
      >
        <LogoImg drag="x" src={YourSvg} alt="Your SVG" />
        <Text
          data-replace="Flow - Cabin Hosting"
          variants={textVariants}
          initial="initial"
          animate="visible"
        >
          <span> Flow - Boarding Cabins </span>
        </Text>
      </MotionLink>
    </Container>
  );
};
