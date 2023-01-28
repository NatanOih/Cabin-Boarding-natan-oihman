import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import ScrollTrigger from "gsap/ScrollTrigger";

import { motion } from "framer-motion";
import gsap from "gsap";

import img1 from "../assets/img/1.jpeg";
import img2 from "../assets/img/2.jpeg";
import img3 from "../assets/img/3.jpeg";
import img4 from "../assets/img/4.jpeg";
import img5 from "../assets/img/5.jpeg";
import img6 from "../assets/img/6.jpeg";
import img7 from "../assets/img/7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  /* height: auto; */

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: aliceblue; */
  position: relative;

  /* z-index: 6; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 3vw ${(props) => props.theme.body};
  border: 3px solid ${(props) => props.theme.body};

  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }
  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 70vw ${(props) => props.theme.text};
    height: 80vh;
  }
  @media (max-width: 48em) {
    width: 60vw;
    height: 80vh;
  }
  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 25vw;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7rem 0;
  padding: 2rem;

  img {
    /* border: 2px solid black; */
    width: 500px;
    height: 600px;
    object-fit: cover;
    filter: grayscale(30%);

    z-index: 5;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 1rem;
  left: 3%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  z-index: 5;
  top: 0;
  right: 0;
  margin-top: 10%;

  @media (max-width: 48em) {
    display: none;
  }
`;

export const NewLocations = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const verticalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = verticalRef.current;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `bottom+=100% top-=100%`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
        },
        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        { y: "0" },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: `bottom top`,
            scroller: ".App", //locomotive-scroll
            scrub: 1,
          },
        }
      );
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="new-locations">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        {" "}
        New Locations{" "}
      </Title>

      <Container ref={verticalRef}>
        {images.map((img, index) => {
          return (
            <Item key={index}>
              <img src={img} alt="img" />
            </Item>
          );
        })}
      </Container>

      <Text data-scroll data-scroll-speed="-3">
        {" "}
        We offer comfortable housing, embedded with nature. <br /> <br /> Have a
        unique vacation expirience with a variety of locations, rivers, forests.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Suscipit tellus
        mauris a diam maecenas sed enim ut sem. Consectetur adipiscing elit
        pellentesque habitant morbi tristique senectus et netus.
        <br />
        <br />
      </Text>
      {/* {showImg && <BigImg img={imgToShow} setShow={setShowImg} />} */}
    </Section>
  );
};
