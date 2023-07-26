import { Box, Center, Flex, Heading, Image, Link } from "@chakra-ui/react";
import Logo from "../../assets/logo2.svg";
import Telegram from "../../assets/telegram.png";
import Twitter from "../../assets/twitter.png";

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

            <Flex justifyContent="center" marginTop="3rem" columnGap="2rem">
              <Link href="https://t.me/twitter2ann">
                <Image src={Telegram} />
              </Link>
              <Link href="https://t.me/twitter2token">
                <Image src={Telegram} />
              </Link>
              <Link href="https://twitter.com/twt2_token">
                <Image src={Twitter} />
              </Link>
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Footer;
