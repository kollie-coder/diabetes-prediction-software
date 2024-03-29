import { Box, Button, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import heroImage from "../../assets/heroImage.png";
import heroImage2 from "../../assets/heroImage2.png";
import { Link } from 'react-scroll';

const Hero = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Flex alignItems="center" gap={6} flexWrap={{ base: "wrap", md: "nowrap" }} px={2} mt={{base:16,md:2}}>
        <Flex
          flex={{ base: "auto", md: 1 }}
          direction="column"
          gap={6}
          //textAlign={{ base: "center", md: "initial" }}
          maxWidth={{ base: "100%", md: "50%" }}
        >
          <Text
            fontSize={{ base: "40px", md: "64px" }}
            fontWeight={700}
            fontFamily="Poppins"
            lineHeight={{ base: "50px", md: "96px" }}
            maxWidth={{ base: "318px", md: "674px" }}
          >
            Predict Diabetes With Ease
          </Text>

          <Text
            color="#171717"
            fontSize={{ base: "20px", md: "20px" }}
            fontFamily="Poppins"
            lineHeight="32px"
            fontWeight={400}
            maxW={{ base: "100%", md: "550px" }}
          >
            DiabetesPredict is an innovative machine learning tool designed to forecast diabetes risk based on patient data, leveraging advanced algorithms to analyze variables such as glucose levels, BMI, and medical history.
          </Text>


          <Link to="guide-section" smooth={true} duration={500}>

          <Button
            width={{ base: "201px", md: "260px" }}
            height={{ base: "50px", md: "114px" }}
            borderRadius={{ base: "10px", md: "20px" }}
            color="white"
            backgroundColor="rgba(44, 75, 116, 1)"
            fontFamily="Poppins"
            fontWeight={{ base: 400, md: 700 }}
            fontSize={{ base: "22.71px", md: "24px" }}
            mt={{ base: "35px", md: "0" }}
            alignSelf={{ base: "center", md: "initial" }} // Align button to center on small screens, but left on larger screens
          >
            Get Started
          </Button>


          </Link>

        </Flex>

        {isLargerThanMD && (
          <Box flex={{ base: "auto", md: 1 }}>
            <Image src={heroImage2} alt="heroImage2" width={{base:"370px",lg:"482px", xl:"582px"}} size h="639px" objectFit="cover" />
          </Box>
        )}
      </Flex>

      <Flex alignContent="center" justifyContent="center" mt={8} display={{ base: "none", md: "flex" }}>
        <Box width="323px" height="9px" borderRadius="2px" backgroundColor="#D9D9D9" />
      </Flex>
    </>
  );
}

export default Hero;