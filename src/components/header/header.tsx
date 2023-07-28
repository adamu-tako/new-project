// import { ReactNode } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Image,
  Icon,
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
import WhitePaper from "../../assets/TWITTER2.pdf";

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

          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems={"center"}
            width="30%"
            columnGap="20px"
            justifyContent="space-around">
            <Link
              as={Button}
              width={{ base: "80%", md: "10rem" }}
              cursor="pointer"
              color="white"
              columnGap=".5rem"
              fontSize={{ base: ".8rem", md: "1rem" }}
              border="1px solid white"
              variant="outline"
              href={WhitePaper}>
              White Paper
            </Link>
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
            zIndex="99999"
            flexDir={{ base: "column", md: "row" }}
            alignItems={"flex-start"}
            padding="10px 10px"
            minH="7rem"
            bgColor="gray.900"
            width="100%"
            justifyContent="space-around">
            <Link
              as={Button}
              width={{ base: "80%", md: "10rem" }}
              cursor="pointer"
              color="white"
              columnGap=".5rem"
              fontSize={{ base: ".8rem", md: "1rem" }}
              border="1px solid white"
              variant="outline"
              href={WhitePaper}>
              White Paper
            </Link>
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
        </Box>
      ) : null}
    </>
  );
}
