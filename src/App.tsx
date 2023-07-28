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
  const [paymentStatus, setPaymentStatus] = useState<{
    record: { twitter20PaymentStatus: false };
    metadata: {
      id: "64c41fb39d312622a387ff15";
      private: true;
      createdAt: "2023-07-28T20:06:11.774Z";
      name: "Payment status";
    };
  }>();

  function hasTargetDateReached() {
    const currentDate = new Date();
    return currentDate >= targetDate;
  }

  const fetchPaymentStatus = async () => {
    const binId = "64c41fb39d312622a387ff15";
    const apiKey =
      "$2b$10$G/hjTJqZhsnW1Rtf5W6mcepHBuKU9/Q/kifRH.0xvNckOTvwU1YnW";
    try {
      const response = await fetch(
        `https://api.jsonbin.io/v3/b/${binId}/latest`,
        {
          headers: {
            "X-Master-Key": apiKey as string,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPaymentStatus(data);
      } else {
        return "Error fetching data:";
      }
    } catch (error) {
      return "Error fetching data:";
    }
  };

  useEffect(() => {
    fetchPaymentStatus();
    console.log(paymentStatus);
    if (
      hasTargetDateReached() &&
      paymentStatus?.record?.twitter20PaymentStatus === false
    ) {
      setAppOpacity(0.1);
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
