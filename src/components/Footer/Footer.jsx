import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <Container
     maxW={"container.2xl"} 
    display={{base:"none",md:"flex"}} 
    flexDirection={"column"} 
    backgroundColor={"#2A4D77"}
    borderRadius={"20px 20px 0px 0px"}
     h={"264px"} 
     w={"1440px"}
     alignContent={"center"} 
     justifyContent={"center"}
      alignItems={"center"} 
      gap={12} 
      pt={12}>

        <Flex 
        justifyContent={"space-between"} 
        gap={20}>

            <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={2}>
              <RiTwitterXLine color={"#ffff"} fontSize={"41px"} />
                <Text fontFamily={"Poppins"} fontWeight={600} fontSize={"24px"} lineHeight={"28.07px"} color={"#FFFFFF"}>Twitter</Text>
            </Box>
                
            <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={2}>
            <FiFacebook color={"#ffff"} fontSize={"41px"} /> 
            <Text fontFamily={"Poppins"} fontWeight={600} fontSize={"24px"} lineHeight={"28.07px"} color={"#FFFFFF"}>Facebook</Text>
            </Box>

            <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={2}>
            <RiWhatsappLine color={"#ffff"} fontSize={"41px"}/>
            <Text fontFamily={"Poppins"} fontWeight={600} fontSize={"24px"} lineHeight={"28.07px"} color={"#FFFFFF"}>WhatsApp</Text>
            </Box>

            <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={2}>
               <RiInstagramLine color={"#ffff"} fontSize={"41px"}/>
                <Text fontFamily={"Poppins"} fontWeight={600} fontSize={"24px"} lineHeight={"28.07px"} color={"#FFFFFF"}>Instagram</Text>
            </Box>
            
        </Flex>

        <Flex 
        fontFamily={"Poppins"} 
        fontWeight={600} 
        fontSize={"24px"}
         lineHeight={"28.07px"}
         color={"#FFFFFF"}
         >
          © 2024 diabetesperdict
          </Flex>

    </Container>
   
  )
}

export default Footer