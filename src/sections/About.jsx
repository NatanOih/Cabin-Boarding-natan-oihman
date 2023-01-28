import React from "react";
import styled from "styled-components";
import img1 from "../assets/img/4.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/1.png";

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  width: 80vw;
  /* overflow: hidden; */
  display: flex;
  margin: 0 auto;

  @media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "kaushan Script";
  color: #111;
  font-weight: 300;

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    border: 1px solid black;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;
const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    filter: grayscale(10%) sepia(20%);
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
    filter: grayscale(30%) sepia(60%);
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    bottom: 30%;
    transform: scaleX(-1);
    filter: grayscale(30%) sepia(60%);
  }

  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100vw;
      height: 95vh;
      object-fit: cover;
    }
    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;
      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;
// data-scroll-section
export const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>

      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mattis ullamcorper
        velit sed ullamcorper morbi tincidunt ornare. Blandit aliquam etiam erat
        velit scelerisque. Nulla aliquet enim tortor at auctor urna. Ornare arcu
        dui vivamus arcu felis. Laoreet sit amet cursus sit. Elementum tempus
        egestas sed sed risus.
      </Left>
      <Right>
        {" "}
        <img alt="About img" src={img1} />
        <img
          data-scroll
          data-scroll-speed="5"
          alt="About img"
          className="small-img-1"
          src={img2}
        />
        <img
          data-scroll
          data-scroll-speed="-2"
          alt="About img"
          className="small-img-2"
          src={img3}
        />
      </Right>
    </Section>
  );
};
