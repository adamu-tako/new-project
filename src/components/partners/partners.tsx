import {
  Box,
  Center,
  Heading,
  Image,
  Link,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Partner1 from "../../assets/partner1.png";
import Partner2 from "../../assets/partner-bsc.png";
import Partner3 from "../../assets/partner-audit.png";
import Partner4 from "../../assets/partner-cmc.png";
import Partner5 from "../../assets/partner-coinGecko.png";
import Partner6 from "../../assets/partner-dextools.png";
import Partner7 from "../../assets/partner-pinkscale.png";

const Partners = () => {
  const partners = [
    { name: "", image: Partner6, link: "https://dextools.io/" },
    { name: "", image: Partner7, link: "https://www.pinksale.finance/" },
    { name: "", image: Partner4, link: "https://coinmarketcap.com/" },
    { name: "", image: Partner2, link: "https://bscscan.com/" },
    { name: "", image: Partner1, link: "https://pancakeswap.finance/" },
    { name: "", image: Partner3, link: "https://www.dexview.com/" },
    { name: "", image: Partner5, link: "https://www.coingecko.com/" },
  ];
  return (
    <Center flexDir="column">
      <Box w="70%">
        <Box
          marginInline="auto"
          textAlign="center"
          width="90%"
          borderRadius="12px"
          height="45px"
          bgColor="#1FBCDF">
          <Heading>PARTNERS</Heading>
        </Box>

        <Wrap marginInline="auto" marginTop="2rem" width="90%" flexWrap="wrap">
          {partners.map((partner) => (
            <Link marginInline="auto" href={partner.link}>
              <WrapItem
                margin="1rem"
                bgColor="#ECECEC"
                padding="1rem"
                borderRadius="12px">
                <Image
                  minWidth="45px"
                  height="45px"
                  maxWidth="55px"
                  src={partner.image}
                  alt={partner.name}
                />
              </WrapItem>
            </Link>
          ))}
        </Wrap>
      </Box>
    </Center>
  );
};

export default Partners;
