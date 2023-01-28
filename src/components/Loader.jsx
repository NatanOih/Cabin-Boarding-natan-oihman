import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import YourSvg from "../assets/SVG/Logo.svg";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    svg {
      width: 15vw;
    }
  }

  svg {
    width: 10vw;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,
      ease: "easeInOut",
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity,

      ease: "easeInOut",
    },
  },
};

const logoVariants = {
  hidden: {
    x: "50vh",
    y: "50vh",
    opacity: 1,
  },
  visible: {
    x: "50vh",
    y: "50vh",
    opacity: 1,
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.text};
  margin-top: 6rem;
  margin-right: 28rem;
  /* padding-top: 0.5rem; */

  @media (max-width: 48em) {
    margin: 0;
    margin-bottom: 5rem;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const LogoImg = styled(motion.img)`
  width: 6rem;
  height: 6rem;
  background-color: #eee;
  border-radius: 50%;
  border: 2px black solid;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  z-index: 100;
`;

const Loader = () => {
  return (
    <>
      <Container
        initial={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Text variants={textVariants} initial="hidden" animate="visible">
          Flow - Boarding Cabins
        </Text>
      </Container>
      <LogoImg
        initial={{ x: "50vw", y: "50vh", opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.01 }}
        src={YourSvg}
        alt="Your SVG"
      />
    </>
  );
};

export default Loader;
