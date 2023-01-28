import React, { useState } from "react";
import styled from "styled-components";
import { easeInOut, motion } from "framer-motion";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const NavContainer = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.showNav ? "0" : `-${props.theme.navHeight}`)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  z-index: 6;

  transition: all 0.3s ease;

  @media (max-width: 40em) {
    top: ${(props) => (props.showNav ? "0" : `calc(-50vh - 4rem)`)};
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  opacity: 0.9;
  color: ${(props) => props.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

const MenuBtn = styled(motion.li)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7 )`};
  list-style-type: style none;
  color: ${(props) => props.theme.body};
  width: 15rem;
  height: 2.5rem;
  clip-path: polygon(0 0, 100% 0%, 80% 100%, 20% 100%);
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 40em) {
    width: 13rem;
    height: 2rem;
  }
`;

const MenuItem = styled(motion.li)`
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`;

export const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elememnt = document.querySelector(id);
    setShowNav(false);
    scroll.scrollTo(elememnt, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.32, 1.0],
    });
  };

  return (
    <NavContainer
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 2, delay: 1.5, ease: easeInOut }}
      showNav={showNav}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 170,
        }}
        dragElastic={0.2}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setShowNav(!showNav)}> Menu </MenuBtn>
        <MenuItem
          onClick={() => {
            handleScroll("#home");
          }}
          whileTap={{ scale: 0.9, y: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          {" "}
          Home{" "}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleScroll(".about");
          }}
          whileTap={{ scale: 0.9, y: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          {" "}
          About{" "}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleScroll("#gallery");
          }}
          whileTap={{ scale: 0.9, y: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          {" "}
          Gallery{" "}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleScroll("#new-locations");
          }}
          whileTap={{ scale: 0.9, y: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          {" "}
          New Locations{" "}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleScroll("#footer");
          }}
          whileTap={{ scale: 0.9, y: 0 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          {" "}
          Footer{" "}
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
};
