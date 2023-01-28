import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BigImage = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(33, 33, 33, 0.9);
  transition: 1s;
  z-index: 200;
  display: flex;

  img {
    justify-content: center;
    align-items: center;

    margin: 5rem;

    border: 1vw solid black;
    width: 65%;
    height: auto;
  }

  p {
    position: absolute;
    top: 5vh;
    right: 5vw;

    background-color: beige;
    border-radius: 10%;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    padding: 0.5rem;
    border: 3px solid black;

    &:hover {
      scale: 1.05;
      transition: ease-in-out 0.2s;
    }

    &:active {
      transition: ease-in-out 0.2s;
      scale: 0.95;
    }
  }
`;

const imgVariant = {
  inital: {
    x: -50,
    opacity: 0,
    scale: 0.1,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delay: 0.3,
    },
  },
};

export const BigImg = ({ setShow, img }) => {
  return (
    <BigImage onClick={() => setShow(false)}>
      <motion.p
        initial={{ x: -50, scale: 0.1, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        exit={{ scale: 0.1, opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        Close
      </motion.p>
      <motion.img
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.1, opacity: 0 }}
        transition={{ delay: 0.1 }}
        src={img}
        alt={img}
      />
    </BigImage>
  );
};
