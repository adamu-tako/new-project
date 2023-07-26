import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import TimelineRow from "./timelineRow";

const Roadmap = () => {
  const timelineData = [
    {
      title: "Phase One",
      date: (
        <>
          <Text lineHeight={"15px"}>Contract deployment</Text>
          <Text lineHeight={"15px"}>Website deployment</Text>
          <Text lineHeight={"15px"}>Social media creation</Text>
          <Text lineHeight={"15px"}>Fairlaunch marketing</Text>
          <Text lineHeight={"15px"}>Pinksale Fairlaunch</Text>
          <Text lineHeight={"15px"}>Pancakeswap Launch</Text>
          <Text lineHeight={"15px"}>Coinmarketcap, Coingecko Listings</Text>
          <Text lineHeight={"15px"}>Community building with memes.</Text>
        </>
      ),
    },
    {
      title: "Phase Two",
      date: (
        <>
          <Text lineHeight={"15px"}>Press release</Text>
          <Text lineHeight={"15px"}>More partnerships (CEX Listings)</Text>
          <Text lineHeight={"15px"}>Post launch Marketing</Text>
          <Text lineHeight={"15px"}>Ecosystem development </Text>
          <Text lineHeight={"15px"}>Buybacks </Text>
          <Text lineHeight={"15px"}>3000 holders</Text>
          <Text lineHeight={"15px"}>App launch</Text>
        </>
      ),
    },
    {
      title: "Phase Three",
      date: (
        <>
          <Text lineHeight={"15px"}>Media Partnership</Text>
          <Text lineHeight={"15px"}>Mega worldwide campaign</Text>
          <Text lineHeight={"15px"}>NFT integration</Text>
          <Text lineHeight={"15px"}> 6000 holders </Text>
        </>
      ),
    },
    {
      title: "Phase Four",
      date: (
        <>
          <Text lineHeight={"15px"}>Celebrity and influencer</Text>
          <Text lineHeight={"15px"}>Community videos and marketing</Text>
          <Text lineHeight={"15px"}>
            Create a huge token army and build a whale community
          </Text>
          <Text lineHeight={"15px"}>NFT market place listing</Text>
          <Text lineHeight={"15px"}>More press releases</Text>
        </>
      ),
    },
  ];
  return (
    <Center>
      <Box
        display="flex"
        justifyContent="center"
        flexDir="column"
        alignItems="center"
        w={{ base: "90%", md: "40%" }}>
        <Box
          color="white"
          marginInline="auto"
          textAlign="center"
          width="250px"
          borderRadius="12px"
          height="45px"
          border="2px solid white"
          bgColor="transparent">
          <Heading>Roadmap</Heading>
        </Box>
        <Box
          color="#000"
          marginInline="auto"
          textAlign="center"
          width="90%"
          borderRadius="12px"
          height="45px"
          fontSize="12px"
          marginBlock="1rem"
          bgColor="transparent">
          <Text>
            Twitter 2.0 roadmap is a compilation of our short- and longterm
            goals. Twitter 2.0 roadmap will be updated as we achieve our current
            goals and gain new goals. Communicate with us on our social media
            platforms to view real time updates.
          </Text>
        </Box>

        <Box w="60%" paddingTop="2rem">
          <Flex direction="column">
            {timelineData.map((row, index, arr) => {
              return (
                <TimelineRow
                  key={row.title}
                  title={row.title}
                  date={row.date}
                  index={index}
                  arrLength={arr.length}
                />
              );
            })}
          </Flex>
        </Box>
      </Box>
    </Center>
  );
};

export default Roadmap;
