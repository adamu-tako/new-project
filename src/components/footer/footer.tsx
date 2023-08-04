import { Box, Center, Flex, Heading, Image, Link } from "@chakra-ui/react";
import Logo from "../../assets/logo2.svg";
import Telegram from "../../assets/Telegram.svg";
import Twitter from "../../assets/twitter.svg";
import Mail from "../../assets/email.svg";

const Footer = () => {
  return (
    <>
      <Center>
        <Box w="70%">
          <Flex
            justifyContent="center"
            width={{ base: "90%", md: "100%" }}
            marginInline="auto">
            <Image src={Logo} alt="Hero Image" />
          </Flex>

          <Box>
            <Box
              textAlign="center"
              width="200px"
              borderRadius="12px"
              height="50px"
              margin="30px auto"
              outline="2px solid white"
              color="#fff"
              bgColor="transparent">
              <Heading>Contact Us</Heading>
            </Box>

            <Flex
              justifyContent="center"
              minH="2rem"
              marginTop="3rem"
              columnGap="2rem">
              {/* <Link href="https://t.me/twitter2ann">
                <Image height="2rem" width="2rem" src={Telegram} />
              </Link> */}
              <Link href="https://t.me/X2Point0">
                <Image height="2rem" width="2rem" src={Telegram} />
              </Link>
              <Link href="https://twitter.com/twt2_token">
                <Image height="2rem" width="2rem" src={Twitter} />
              </Link>
              <Link href="mailto: ceo@twitter20.io">
                <Image height="2rem" width="2rem" src={Mail} />
              </Link>
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Footer;
