import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  z-index: 30;
  margin-right: 12rem;
  img {
    width: 100%;
    height: 50vh;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 18rem;
  }
`;

export const Product = ({ img, title = "", hadnleEnlarge }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
      onClick={() => hadnleEnlarge}
    >
      <img width="400" height="500" src={img} alt={title} />
      {/* <h1>{title}</h1> */}
    </Item>
  );
};
