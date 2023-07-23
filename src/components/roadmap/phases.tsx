import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Arrow from "../../assets/arrowDown.svg";

const Phases = () => {
  return (
    <>
      <Flex
        flexDir="column"
        rowGap="1rem"
        alignItems="flex-start"
        bgColor="#1FBCDF"
        fontSize="9px"
        w="85%"
        marginInline="auto"
        paddingBlock="1.2rem"
        paddingInline=".5rem"
        color="#fff"
        borderRadius="12px"
        marginBlock="3rem"
        textAlign="center"
        border="4px solid #000">
        <Text fontSize="15px">Phase 1</Text>
        <Text lineHeight={0}>Contract deployment</Text>
        <Text lineHeight={0}>Website deployment</Text>
        <Text lineHeight={0}>Social media creation</Text>
        <Text lineHeight={0}>Fairlaunch marketing</Text>
        <Text lineHeight={0}>Pinksale Fairlaunch</Text>
        <Text lineHeight={0}>Pancakeswap Launch</Text>
        <Text lineHeight={0}>Coinmarketcap, Coingecko Listings</Text>
        <Text lineHeight={0}>Community building with memes.</Text>
      </Flex>

      <Box height="6rem">
        <Image
          marginInline="auto"
          width="5rem"
          h="6rem"
          src={Arrow}
          alt="arrow down"
        />
      </Box>

      <Flex
        flexDir="column"
        rowGap="1rem"
        alignItems="flex-start"
        bgColor="#1FBCDF"
        fontSize="9px"
        w="85%"
        marginInline="auto"
        paddingBlock="1.2rem"
        paddingInline=".5rem"
        color="#fff"
        borderRadius="12px"
        marginBlock="3rem"
        textAlign="center"
        border="4px solid #000">
        <Text fontSize="15px">Phase 2</Text>
        <Text lineHeight={0}>Press release</Text>
        <Text lineHeight={0}>More partnerships (CEX Listings)</Text>
        <Text lineHeight={0}>Post launch Marketing</Text>
        <Text lineHeight={0}>Ecosystem development </Text>
        <Text lineHeight={0}>Buybacks </Text>
        <Text lineHeight={0}>3000 holders</Text>
        <Text lineHeight={0}>App launch</Text>
      </Flex>

      <Box height="6rem">
        <Image
          marginInline="auto"
          width="5rem"
          h="6rem"
          src={Arrow}
          alt="arrow down"
        />
      </Box>

      <Flex
        flexDir="column"
        rowGap="1rem"
        alignItems="flex-start"
        bgColor="#1FBCDF"
        fontSize="9px"
        w="85%"
        marginInline="auto"
        paddingBlock="1.2rem"
        paddingInline=".5rem"
        color="#fff"
        borderRadius="12px"
        marginBlock="3rem"
        textAlign="center"
        border="4px solid #000">
        <Text fontSize="15px">Phase 3</Text>
        <Text lineHeight={0}>Media Partnership</Text>
        <Text lineHeight={0}>Mega worldwide campaign</Text>
        <Text lineHeight={0}>NFT integration</Text>
        <Text lineHeight={0}> 6000 holders </Text>
      </Flex>

      <Box height="6rem">
        <Image
          marginInline="auto"
          width="5rem"
          h="6rem"
          src={Arrow}
          alt="arrow down"
        />
      </Box>

      <Flex
        flexDir="column"
        rowGap="1rem"
        alignItems="flex-start"
        bgColor="#1FBCDF"
        fontSize="9px"
        w="85%"
        marginInline="auto"
        paddingBlock="1.2rem"
        paddingInline=".5rem"
        color="#fff"
        borderRadius="12px"
        marginBlock="3rem"
        textAlign="center"
        border="4px solid #000">
        <Text fontSize="15px">Phase 4</Text>
        <Text lineHeight={0}>Celebrity and influencer</Text>
        <Text lineHeight={0}>Community videos and marketing</Text>
        <Text lineHeight={0}>
          Create a huge token army and build a whale community
        </Text>
        <Text lineHeight={0}>NFT market place listing</Text>
        <Text lineHeight={0}>More press releases</Text>
      </Flex>
    </>
  );
};

export default Phases;
