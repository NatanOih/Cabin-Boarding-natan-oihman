import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

import YourSvg from "../assets/SVG/Logo.svg";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 13vh;
    height: auto;
    background-color: white;
    border-radius: 50%;
    height: 13vh;
    border: 1px solid black;

    @media (max-width: 48em) {
      width: 10vh;
      height: 10vh;
    }
  }

  h3 {
    font-size: ${(props) => props.theme.fontxl};
    font-family: "Kaushan Script";
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const FooterComponenet = styled(motion.footer)`
  width: 80vw;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      margin: 1rem;
      flex-direction: row;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Clicked = styled(motion.span)`
  font-size: 1rem;
  position: relative;
  position: absolute;

  left: 70vw;
  /* top: 3rem; */
  user-select: none;
`;

const CopyButton = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  position: relative;
  display: inline-block;

  &::before {
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

  &:focus::after {
    transform: translate3d(0, 0, 0);
  }

  &:hover::before,
  &:focus::before {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }
`;

export const Footer = () => {
  const [clicked, setClicked] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elememnt = document.querySelector(id);

    scroll.scrollTo(elememnt, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.32, 1.0],
    });
  };

  const handleClick = () => {
    navigator.clipboard.writeText("natanoih@gmail.com");
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 300);
  };

  return (
    <Section id="footer">
      <LogoContainer>
        <img data-scroll data-scroll-speed="2" src={YourSvg} alt="safasf" />
        <h3 data-scroll data-scroll-speed="-1">
          {" "}
          Flow - Boarding Cabins
        </h3>
      </LogoContainer>

      <FooterComponenet
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1.5,
        }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}> home </li>
          <li onClick={() => handleScroll(".about")}> aboue </li>
          <li onClick={() => handleScroll("#gallery")}> gallery </li>
          <li onClick={() => handleScroll("#new-locations")}>
            {" "}
            new locations{" "}
          </li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; {new Date().getFullYear()}. Natan Oihman
          </span>

          <CopyButton
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
            onTap={handleClick}
            onClick={handleClick}
          >
            natanoih@gmail.com{" "}
          </CopyButton>
          {clicked && <Clicked animate={{ y: -25 }}> Copied </Clicked>}
        </Bottom>
      </FooterComponenet>
    </Section>
  );
};
