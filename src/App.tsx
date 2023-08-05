import { Box, DarkMode } from "@chakra-ui/react";
import Header from "./components/header/header";
import HeroSection from "./components/hero/hero";
import Partners from "./components/partners/partners";
import AboutSection from "./components/about/about";
import Tokenomics from "./components/tokenomics/tokenomics";
import Roadmap from "./components/roadmap/roadmap";
import Footer from "./components/footer/footer";
import { useEffect, useState } from "react";
// import Star from "./assets/star.svg";

function App() {
  const targetDate = new Date("2023-08-05");
  const [appOpacity, setAppOpacity] = useState<number>(1);


  function hasTargetDateReached() {
    const currentDate = new Date();
    return currentDate >= targetDate;
  }

  useEffect(() => {
    if (hasTargetDateReached()) {
      setAppOpacity(0.01);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Box bgColor="black" opacity={appOpacity} fontFamily="Open Sans">
        <DarkMode>
          <Box bgSize="100%" height="40vh">
            <Header />
          </Box>
        </DarkMode>
        <Box
          // transform={{ base: "translateY(-100px)", md: "unset" }}
          bgRepeat="no-repeat">
          <HeroSection />
        </Box>
        <Box marginBlock={{ base: "3rem", md: "6rem" }}>
          <Partners />
        </Box>
        <Box>
          <AboutSection />
        </Box>
        <Box>
          <Tokenomics />
        </Box>
        <Box>
          <Roadmap />
        </Box>
        <Box padding="4rem 0rem 5rem 0">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
