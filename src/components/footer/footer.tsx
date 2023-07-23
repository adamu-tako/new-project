import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";
import FooterHead from "../../assets/footer.head.png";
import Telegram from "../../assets/telegram.png";
import Twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <>
      <Center>
        <Box w="70%">
          <Box margin=".5rem 0 3.5rem 0">
            <Image src={FooterHead} alt="Footer image" />
          </Box>

          <Box>
            <Box
              color="#000"
              marginInline="auto"
              textAlign="center"
              width="90%"
              borderRadius="12px"
              height="45px"
              bgColor="#fff">
              <Heading>Contact Us</Heading>
            </Box>

            <Flex justifyContent="center" marginTop="3rem" columnGap="2rem">
              <Image src={Telegram} />
              <Image src={Twitter} />
            </Flex>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Footer;
