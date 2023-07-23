// import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  Image,
  Icon,
} from "@chakra-ui/react";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <>
      <Box bg={useColorModeValue("transparent", "transparent")}>
        <Flex
          h={"fit-content"}
          alignItems={"center"}
          justifyContent={"space-between"}>
          <Box w="5rem">
            <Image src={Logo} alt="Logo" />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <HamburgerIcon w={8} h={8} color="white" />
              <Button
                as={Flex}
                columnGap=".5rem"
                colorScheme="whiteAlpha"
                variant="outline">
                <Flex flexDir="column">
                  <Icon as={ArrowForwardIcon} />
                  <Icon as={ArrowBackIcon} />
                </Flex>
                Buy Now
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
