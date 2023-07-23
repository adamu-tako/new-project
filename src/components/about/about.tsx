import { Box, Center, Heading, Text } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <Center
      marginTop="3rem"
      flexDir="column"
      justifyContent="center"
      alignItems="center">
      <Box w="90%">
        <Box
          marginInline="auto"
          textAlign="center"
          width="50%"
          borderRadius="12px"
          height="45px"
          outline="1px solid #1FBCDF"
          color="#fff"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
          bgColor="#000">
          <Heading>About</Heading>
        </Box>

        <Box marginTop="1.5rem" textAlign="justify" fontSize="10px">
          <Text marginBlock=".5rem">
            Twitter has always held it’s own against a sea of ordinary apps that
            compare poorly. There have always been attempts to oust the
            microblogging giant, the latest of which was Thr**ds, Suckerberg’s
            effort to imitate Twitter’s excellence. A few have wondered what
            Twitter’s response would be... Introducing Twitter 2.0, the vastly
            improved version of the 30 billion dollar networking platform,
            boasting many more features and an even better user experience.
            Twitter 2.0 will be the first to successfully connect the entire
            planet on one state-of-the-art platform.
          </Text>
          <Text marginBlock=".5rem">
            Touted as the true ‘everything app’, Twitter 2.0 enables it’s users
            to seamlessly exchange news, ideas, opinion and finance. Our
            competition is hanging on by a ‘thread’. Don’t opt for an
            alternative to Twitter. Opt for a new and better Twitter, Twitter
            2.0. ACURATE INFORMATION, AND FAST Twitter is known to be the place
            to get news and updates earliest, even sooner than the biggest news
            channels. Twitter 2.0 informs you about happenings in the world and
            around you much faster and with precise accuracy. You can say
            goodbye to false threads that contain no real information.
          </Text>
        </Box>

        <Box
          bgColor="#1FBCDF"
          fontSize="10px"
          w="85%"
          marginInline="auto"
          minHeight="250px"
          paddingBlock=".5rem"
          paddingInline=".5rem"
          color="white"
          borderRadius="12px"
          marginBlock="3rem"
          border="4px solid #000">
          <Box
            marginInline="auto"
            textAlign="center"
            width="90%"
            marginBlock=".5rem"
            borderRadius="12px"
            height="35px"
            color="#fff"
            bgColor="#000">
            <Heading fontSize="xl">Special Features</Heading>
          </Box>

          <Box marginBlock=".5rem">
            <Heading fontSize="1rem">SMART SEARCH:</Heading>
            <Text>
              Twitter 2.0 possesses a smart search feature that ensures you
              quickly find what you are searching for when you tap the search
              icon.
            </Text>
          </Box>

          <Box marginBlock=".5rem">
            <Heading fontSize="1rem">PERSONIFIED TRENDING:</Heading>
            <Text>
              Our smart system understands what each user is most interested in,
              and offers that information among trending topics while also
              providing access to all relevant trends.
            </Text>
          </Box>

          <Box marginBlock=".5rem">
            <Heading fontSize="1rem">QUALITY AND CLARITY:</Heading>
            <Text>
              Crisp, high definition image quality means that it is not just the
              general information on Twitter 2.0 that maintains quality and
              clarity. The resolution of uploaded multimedia is perfectly
              preserved.
            </Text>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

export default AboutSection;
