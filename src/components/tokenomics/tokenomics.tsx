import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

const Tokenomics = () => {
  return (
    <Center>
      <Box w="100%">
        <Box
          color="white"
          marginInline="auto"
          textAlign="center"
          width="250px"
          borderRadius="12px"
          height="45px"
          border="2px solid white"
          bgColor="transparent">
          <Heading>Tokenomics</Heading>
        </Box>

        <Flex
          flexDir="column"
          justifyContent="space-around"
          rowGap="1rem"
          bgColor="#fff"
          fontSize="12px"
          w={{ base: "90%", md: "40%" }}
          minH="100px"
          marginInline="auto"
          paddingBlock=".5rem"
          paddingInline=".5rem"
          color="#000"
          borderRadius="12px"
          marginBlock="3rem"
          textAlign="center"
          border="4px solid #000">
          <Heading fontSize="1rem">
            0x533b589742563bacc26aa60ed065c1481deb52a6
          </Heading>
          <Text>Contract Address</Text>
        </Flex>

        <Flex
          flexDir="column"
          rowGap="1rem"
          bgColor="white"
          fontSize="12px"
          w={{ base: "90%", md: "40%" }}
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
            justifyContent="space-around"
            color="white"
            marginInline="auto"
            textAlign="center"
            width="90%"
            minH="60px"
            borderRadius="12px"
            bgColor="#000">
            <Heading fontSize="15px">0%/ 5%</Heading>
            <Heading fontSize="12px">Buy/ Sell Tax</Heading>
          </Flex>

          <Flex
            flexDir="column"
            justifyContent="space-around"
            color="white"
            marginInline="auto"
            textAlign="center"
            w={{ base: "90%", md: "70%" }}
            minH="250px"
            padding="10px"
            borderRadius="12px"
            bgColor="#000">
            <Text fontSize="1.2rem">
              No Taxes, No Hassles. Feels Good Right?
            </Text>
            {/* <Text fontSize=".8rem" marginTop=".5rem">
              Audit on contract, passed. No unlocked tokens, no dev or team
              token, contract is renounced and 100% transparency with the
              community. 20% is locked and reserved for CEX listing, big
              partnership, burning events, and development of the twitter 2.0
              community ecosystem.
            </Text> */}
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          rowGap="1rem"
          bgColor={{ base: "#fff", md: "transparent" }}
          fontSize="12px"
          w={{ base: "90%", md: "50%" }}
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
            <Heading fontSize="15px">420,069,000</Heading>
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
            <Heading fontSize="15px">TWTR</Heading>
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
