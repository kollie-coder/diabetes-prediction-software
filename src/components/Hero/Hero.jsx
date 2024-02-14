import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import heroImage from "../../assets/heroImage.png";
import heroImage2 from "../../assets/heroImage2.png";

const Hero = () => {
  return (
    <>
    <Flex>
        <Box display={{base:"none", md:"flex"}} flex={1}>
            <Image src={heroImage} alt='imgae1' w={"192px"} h={"192px"} objectFit={"cover"}/>
        </Box>
       
            <Text fontSize={{base:"40px", md:"80px"}} fontWeight={600} 
            fontFamily={"Source Sans Pro"}
             textAlign={"center"} lineHeight={"104px"} flex={3}>
                 Diagnose Diabetes With Ease
            </Text>
       

        <Box marginTop='150px' display={{base:"none", md:"flex"}} flex={1}>
            <Image src={heroImage2} alt='heroImage2' w={"172px"} h={"172px"} objectFit={"cover"} />
        </Box>
    </Flex>

    <Text color="#171717" fontSize="32px" fontFamily="Source Sans Pro" lineHeight="42px" textAlign="center" py={{base:"10", md:"20"}}>
    DiabetesPredict is an innovative machine learning tool designed to forecast diabetes risk based on patient data, 
    leveraging advanced algorithms to analyze variables such as glucose levels, BMI, and medical history. This user-friendly
     application offers personalized predictions, empowering healthcare professionals to implement preventive measures and optimize 
     patient care, thereby potentially reducing the incidence and severity of diabetes-related complications.
    </Text>

    </>
  )
}

export default Hero