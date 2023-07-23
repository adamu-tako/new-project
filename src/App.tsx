import { Box } from "@chakra-ui/react";
import Header from "./components/header/header";
import Ellipse from "./assets/ellipse.svg";
import FooterBg from "./assets/footer.bg.png";
import HeroSection from "./components/hero/hero";
import Partners from "./components/partners/partners";
import AboutSection from "./components/about/about";
import Tokenomics from "./components/tokenomics/tokenomics";
import Roadmap from "./components/roadmap/roadmap";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Box fontFamily="primary">
        <Box
          backgroundImage={Ellipse}
          backgroundRepeat="no-repeat"
          bgSize="100%"
          height="40vh">
          <Header />
        </Box>
        <Box transform="translateY(-100px)">
          <HeroSection />
        </Box>
        <Box>
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
        <Box
          padding="4rem 0rem 5rem 0"
          bgImage={FooterBg}
          backgroundRepeat="no-repeat"
          bgSize="100%"
          height="60vh">
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
