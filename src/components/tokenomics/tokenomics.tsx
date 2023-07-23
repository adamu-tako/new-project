import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

const Tokenomics = () => {
  return (
    <Center>
      <Box w="70%">
        <Box
          color="white"
          marginInline="auto"
          textAlign="center"
          width="90%"
          borderRadius="12px"
          height="45px"
          bgColor="#1FBCDF">
          <Heading>Tokenomics</Heading>
        </Box>

        <Flex
          flexDir="column"
          rowGap="1rem"
          bgColor="#1FBCDF"
          fontSize="12px"
          w="85%"
          marginInline="auto"
          paddingBlock=".5rem"
          paddingInline=".5rem"
          color="#000"
          borderRadius="12px"
          marginBlock="3rem"
          textAlign="center"
          border="4px solid #000">
          <Text>6478299284848w9928284</Text>
          <Text>Contract Address</Text>
        </Flex>

        <Flex
          flexDir="column"
          rowGap="1rem"
          bgColor="transparent"
          fontSize="12px"
          w="85%"
          marginInline="auto"
          paddingBlock=".5rem"
          paddingInline=".5rem"
          color="#000"
          borderRadius="12px"
          marginBlock="3rem"
          textAlign="center"
          border="4px solid #000">
          <Box
            color="white"
            marginInline="auto"
            textAlign="center"
            width="90%"
            borderRadius="12px"
            bgColor="#000">
            <Heading fontSize="15px">% 0</Heading>
            <Heading fontSize="12px">Buy? Sell Tax</Heading>
          </Box>

          <Box
            color="white"
            marginInline="auto"
            textAlign="center"
            width="90%"
            padding="10px"
            borderRadius="12px"
            bgColor="#000">
            <Text fontSize="8px">No Taxes, No Hassles. Feels Good Right?</Text>
            <Text fontSize="7px" marginTop=".5rem">
              Audit on contract, passed. No unlocked tokens, no dev or team
              token, contract is renounced and 100% transparency with the
              community. 20% is locked and reserved for CEX listing, big
              partnership, burning events, and development of the shiba meme
              community ecosystem.
            </Text>
          </Box>
        </Flex>

        <Flex
          flexDir="column"
          rowGap="1rem"
          bgColor="#1FBCDF"
          fontSize="12px"
          w="85%"
          marginInline="auto"
          paddingBlock=".5rem"
          paddingInline=".5rem"
          color="#000"
          borderRadius="12px"
          marginBlock="3rem"
          textAlign="center"
          border="4px solid #000">
          <Flex
            flexDir="column"
            justifyContent="space-between"
            paddingBlock=".3rem"
            color="#000"
            marginInline="auto"
            textAlign="center"
            width="90%"
            minH="50px"
            border="2px solid black"
            borderRadius="12px"
            bgColor="#fff">
            <Heading fontSize="15px">1,000,000,000,000,000</Heading>
            <Heading fontSize="12px">Total Supply</Heading>
          </Flex>

          <Flex
            flexDir="column"
            justifyContent="space-between"
            paddingBlock=".3rem"
            color="#000"
            marginInline="auto"
            textAlign="center"
            width="90%"
            minH="50px"
            border="2px solid black"
            borderRadius="12px"
            bgColor="#fff">
            <Heading fontSize="15px">Twitter 2.0</Heading>
          </Flex>

          <Flex>
            <Flex
              flexDir="column"
              justifyContent="space-between"
              paddingBlock=".3rem"
              color="#000"
              marginInline="auto"
              textAlign="center"
              width="40%"
              minH="50px"
              border="2px solid black"
              borderRadius="12px"
              bgColor="#fff"></Flex>
            <Flex
              flexDir="column"
              justifyContent="space-between"
              paddingBlock=".3rem"
              color="#000"
              marginInline="auto"
              textAlign="center"
              width="40%"
              minH="50px"
              border="2px solid black"
              borderRadius="12px"
              bgColor="#fff"></Flex>
          </Flex>
        </Flex>
      </Box>
    </Center>
  );
};

export default Tokenomics;
