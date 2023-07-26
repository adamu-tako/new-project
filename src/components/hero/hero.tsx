import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import Logo from "../../assets/logo2.svg";
import Triangle from "../../assets/triangle.svg";

const HeroSection = () => {
  return (
    <Center flexDir="column">
      <Box
        bgColor="transparent"
        fontSize="12px"
        w={{ base: "90%", md: "70%" }}
        minHeight="250px"
        paddingBlock="1.5rem"
        paddingInline={{ base: ".5rem", md: "1rem" }}
        color="white"
        textAlign="justify"
        borderRadius="12px"
        border="4px solid #fff">
        <Heading fontSize="34px">Twitter 2.0</Heading>
        <Heading fontSize="18px">IS BIGGER AND BETTER</Heading>
        <Text marginBlock=".5rem">
          With the creation of the Thr**ds app, many have speculated about it
          being a threat to Twitter. This is laughable. They say imitation is
          the sincerest form of flattery and Threads has imitated Twitter,
          albeit very poorly. Twitter 2.0 is here to end all imitation and
          speculation and establish as the ONLY thread-based social platform.
          You can say more, see more and be heard and understood globally. This
          is the aim of Twitter 2.0
        </Text>
        <Text marginBlock=".5rem">
          Twitter 2.0 is solely focused on making the twitter space exclusive,
          with more personalized threads, room for longer video uploads, longer
          tweets, and more artificial intelligence inculcated into the UI.
          Twitter 2.0 is focused on versatility and rapid improvement, as a
          result of this, Twitter 2.0 will be tied with the crypto market,
          particularly NFTs. Users will be able to buy exclusive NFTs using our
          native token (TWTR). In addition to this, users will be able to buy
          features like verified tags using TWTR. Twitter 2.0 is a direct
          response to the Threads app which is headed by Elon’s biggest rival
          (Count zuck). As such, Twitter 2.0 is aimed at crushing the
          competition and making twitter better than ever.
        </Text>
      </Box>
      <Box
        w="100%"
        bgImage={{ base: "", md: Triangle }}
        bgPosition="bottom right"
        bgRepeat="no-repeat"
        marginTop="4rem">
        <Box width={{ base: "90%", md: "fit-content" }} marginInline="auto">
          <Image src={Logo} alt="Hero Image" />
        </Box>
      </Box>
    </Center>
  );
};

export default HeroSection;
