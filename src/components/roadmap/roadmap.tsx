import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Phases from "./phases";

const Roadmap = () => {
  return (
    <Center>
      <Box w="70%">
        <Box
          color="#000"
          marginInline="auto"
          textAlign="center"
          width="90%"
          borderRadius="12px"
          height="45px"
          bgColor="#1FBCDF">
          <Heading>Roadmap</Heading>
        </Box>
        <Box
          color="#000"
          marginInline="auto"
          textAlign="center"
          width="90%"
          borderRadius="12px"
          height="45px"
          fontSize="10px"
          marginBlock="1rem"
          bgColor="transparent">
          <Text>
            Twitter 2.0 roadmap is a compilation of our short- and longterm
            goals. Twitter 2.0 roadmap will be updated as we achieve our current
            goals and gain new goals. Communicate with us on our social media
            platforms to view real time updates.
          </Text>
        </Box>

        <Phases />
      </Box>
    </Center>
  );
};

export default Roadmap;
