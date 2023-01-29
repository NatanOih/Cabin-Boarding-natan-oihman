import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/globalStyles";
import { dark } from "./styles/Themes";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Gallery } from "./sections/Gallery/Gallery";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Loader from "./components/Loader";
import { Banner } from "./sections/Banner";
import { NewLocations } from "./sections/NewLocations";
import { Footer } from "./sections/Footer";

function App() {
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
              touchMultiplier: 4,
            },
            tablet: {
              smooth: true,
              breakpoint: 0,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              {Loaded ? null : <Loader />}
              <Home key="home" />
              <About key="about" />
              <Gallery key="Gallery" />
              <Banner key="Banner" />
              <NewLocations key="NewLocations" />
              <Footer key="footer" />
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
