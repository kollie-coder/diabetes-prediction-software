import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import heroImage from "../../assets/heroImage.png";
import heroImage2 from "../../assets/heroImage2.png";

const Hero = () => {
  return (
    <>
    <Flex alignItems={"center"}>

        <Flex flex={1} direction={"column"} gap={6}>

        <Text fontSize={"64px"}
            fontWeight={700} 
            fontFamily={"Poppins"}
             lineHeight={"96px"}
             maxW={"674px"}
             >
                 Diagnose Diabetes With Ease
            </Text>

            <Text color={"#171717"}
             fontSize={"20px"}
             fontFamily={"Poppins"}
              lineHeight={"32px"}
              fontWeight={400}
              maxW={"550px"}
              >
            DiabetesPredict is an innovative machine learning tool designed to forecast diabetes risk based on patient data, 
           leveraging advanced algorithms to analyze variables such as glucose levels, BMI, and medical history.
            </Text>

            <Button width={"260px"} 
            height={"114px"} 
            borderRadius={"20px"}
            color={"rgba(255, 255, 255, 1)"}
            backgroundColor={"rgba(44, 75, 116, 1)"}
            fontFamily={"Poppins"}
            fontWeight={700}
            fontSize={"24px"}
            marginTop={"35px"}
            
            >
                 Get Started
            </Button>

        </Flex>
            
       

        <Box display={{base:"none", md:"flex"}} flex={1}>
            <Image src={heroImage2} alt='heroImage2' w={"582px"} h={"639px"} objectFit={"cover"} />
        </Box>
    </Flex>

    </>
  )
}

export default Hero