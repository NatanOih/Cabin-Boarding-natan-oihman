import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import img1 from "../../assets/img/1.png";
import img2 from "../../assets/img/2.png";
import img3 from "../../assets/img/3.png";
import img4 from "../../assets/img/4.png";
import img5 from "../../assets/img/5.png";
import img6 from "../../assets/img/6.png";
import img7 from "../../assets/img/7.png";
import img8 from "../../assets/img/8.png";
import img9 from "../../assets/img/9.png";
import img10 from "../../assets/img/10.png";
import { Product } from "./Product";
import { BigImg } from "./BigImg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    top: -3rem;
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 64em) {
      p {
        font-size: ${(props) => props.theme.fontmd};
      }
    }
    @media (max-width: 48em) {
      p {
        font-size: ${(props) => props.theme.fontsm};
      }
    }
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef();
  const Horizontalref = useRef();
  const [showImg, setShowImg] = useState(false);
  const [imgToShow, setimgToShow] = useState("");

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = Horizontalref.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      if (t1 !== undefined) {
        t1.kill();
      }
    };
  }, []);

  const hadnleEnlarge = (img) => {
    console.log("clicked", img);
    setShowImg(true);
    setimgToShow(img);
  };

  return (
    <>
      <Section ref={ref} id="gallery">
        <Title data-scroll data-scroll-speed="-2">
          Our Locations
        </Title>

        <Left>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac orci
            phasellus egestas tellus rutrum tellus. Dignissim enim sit amet
            venenatis urna cursus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
            auctor augue mauris augue.
          </p>
        </Left>
        <Right data-scroll ref={Horizontalref}>
          {images.map((img, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  hadnleEnlarge(img);
                }}
              >
                <Product img={img} title="" />
              </div>
            );
          })}
        </Right>
        {showImg && <BigImg img={imgToShow} setShow={setShowImg} />}
      </Section>
    </>
  );
};
