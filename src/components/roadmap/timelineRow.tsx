import { Box, Flex, Text } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function TimelineRow(props: any) {
  const { title, date, index, arrLength } = props;
  // const textColor = useColorModeValue("gray.700", "white.300");
  // const bgIconColor = useColorModeValue("white.300", "gray.700");

  return (
    <Flex
      alignItems="start"
      minH="100px"
      h="fit-content"
      justifyContent="start">
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        h="100%">
        <Box w="2rem" borderRadius="50%" height="2rem" bg="white"></Box>
        <Box w="2px" bg="white" h={index === arrLength - 1 ? "0" : "250px"} />
      </Flex>
      <Flex
        flexDir="column"
        rowGap="1rem"
        alignItems="flex-start"
        bgColor="transparent"
        fontSize="12px"
        w="85%"
        position="relative"
        paddingBlock="1.2rem"
        paddingInline=".5rem"
        marginInlineStart="2.5rem"
        marginTop="-50px"
        color="#fff"
        borderRadius="12px"
        border="2px solid white"
        textAlign="start">
        <Box
          position="absolute"
          clipPath="polygon(100% 0, 0 53%, 100% 100%)"
          left="-31px"
          top="47px"
          height="2rem"
          width="2rem"
          bg="white"></Box>
        <Text fontSize="sm" color={"white"} fontWeight="bold">
          {title}
        </Text>
        <Box>{date}</Box>
      </Flex>
    </Flex>
  );
}
