import { Box, Button, Flex, Text, Image, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import DiagnosePic from "../../assets/diagnose.png";

const Diagnose = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems="center"
        my={{ base: 5, md: 10 }}
        pb={5}
        gap={{ base: "30px", md: "194px" }}
        id='diagnose-section'
      >
        <Box flex={{ base: "initial", md: 1 }} px={{ base: 5, md: 0 }}>
          <Text
            color='#000000'
            fontSize='32px'
            fontFamily='Poppins'
            fontWeight={700}
            lineHeight={'38.07px'}
            py={4}
           
          >
            Predict diabetes effortlessly
          </Text>

          <Text
            color='#000000'
            fontSize='20px'
            fontFamily='Poppins'
            lineHeight='28.07px'
            fontWeight={400}
            py={5}
            maxW={{ base: "100%", md: "435px" }}
            
          >
            Receive accurate diabetes prediction by inputting your medical data into our advanced machine learning model
          </Text>

          <a href={"/predict"}>
            <Button
              fontSize={"17.55px"}
              fontFamily={"Poppins"}
              fontWeight={700}
              borderRadius={"20px"}
              backgroundColor={"#2A4D77"}
              color={"#ffffff"}
              width={"162px"}
              height={"62px"}
              mt={10}
              display="block"
            >
              Try Now
            </Button>
          </a>

        </Box>

        {isLargerThanMD && (
          <Box flex={1} display={{ base: "none", md: "flex" }}>
            <Image
              src={DiagnosePic}
              alt='diagnose'
              width="525px"
              height="auto"
              objectFit="cover"
            />
          </Box>
        )}
      </Flex>

      <Flex alignContent={"center"} justifyContent={"center"} py={{ base: 4, md: 8 }} mb={6} display={{ base: "none", md: "flex" }}>
        <Box width={"100%"} maxWidth={"323px"} height={"9px"} borderRadius={"2px"} backgroundColor={"#D9D9D9"} />
      </Flex>
    </>
  );
}

export default Diagnose;