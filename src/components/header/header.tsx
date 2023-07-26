// import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Image,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <>
      <Box bg={useColorModeValue("transparent", "transparent")}>
        <Flex
          h={"fit-content"}
          alignItems={"center"}
          padding={{ base: "10px 20px", md: "20px 30px" }}
          justifyContent={"space-between"}>
          <Box w={{ base: "5rem", md: "10rem" }}>
            <Image src={Logo} alt="Logo" />
          </Box>

          <Heading fontSize={{ base: "xs", md: "4xl" }}>Twitter 2.0</Heading>
          <Flex alignItems={"center"}>
            <Button
              as={Flex}
              cursor="pointer"
              columnGap=".5rem"
              fontSize={{ base: ".8rem", md: "1rem" }}
              border="1px solid white"
              variant="outline">
              <Flex flexDir="column">
                <Icon as={ArrowForwardIcon} />
                <Icon as={ArrowBackIcon} />
              </Flex>
              Buy Now
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
