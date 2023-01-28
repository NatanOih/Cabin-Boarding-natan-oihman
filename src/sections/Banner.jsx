import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  @media (max-width: 48em) {
    width: 90vw;
  }
`;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 64em) {
    justify-content: center;
  }
`;

const BannerComponenet = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 64em) {
    margin: 1rem 0;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin: 0.5rem 0;
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  z-index: 10;
  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
  }
`;

export const Banner = () => {
  return (
    <Section>
      <Container id="up">
        <BannerComponenet>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="8"
            data-scroll-target="#up"
          >
            {" "}
            bla bla bla bal
          </span>
        </BannerComponenet>
        <BannerComponenet
          data-scroll
          data-scroll-speed="-2"
          data-scroll-target="#up"
        >
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up"
          >
            {" "}
            bla bla bla bla bal
          </span>
        </BannerComponenet>
        <BannerComponenet>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            {" "}
            bla bla bla bla bla bla bal
          </span>
        </BannerComponenet>
        <BannerComponenet>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"
          >
            {" "}
            bla blac bal
          </span>
        </BannerComponenet>
        <BannerComponenet
          data-scroll
          data-scroll-speed="6"
          data-scroll-target="#up"
        >
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"
          >
            {" "}
            bla bla bla bla bl bal
          </span>
        </BannerComponenet>
      </Container>
    </Section>
  );
};
