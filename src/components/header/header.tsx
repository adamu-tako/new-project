// import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Image,
  Icon,
  Heading,
  Link,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import Logo from "../../assets/logo.svg";
import WhitePaper from "../../assets/Twitter X2.0 White Paper.pdf";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
            gap="20px 0px"
            width="30%"
            justifyContent="space-around">
            <Link href={WhitePaper}>White Paper</Link>
            <Button
              as={Flex}
              width={{ base: "80%", md: "10rem" }}
              cursor="pointer"
              color="white"
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
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Box>

      {isOpen ? (
        <Box margin="20px 0px" display={{ md: "none" }}>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            alignItems={"flex-start"}
            padding="10px 10px"
            minH="7rem"
            bgColor="gray.900"
            width="100%"
            justifyContent="space-around">
            <Link href={WhitePaper}>Download White Paper</Link>
            <Button
              as={Flex}
              width={{ base: "40%", md: "10rem" }}
              cursor="pointer"
              color="white"
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
        </Box>
      ) : null}
    </>
  );
}
