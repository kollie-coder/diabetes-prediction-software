import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Twitter from "../../assets/twitter.png";
import Facebook from "../../assets/facebook.png";
import Whatsapp from "../../assets/whatsapp.png";
import Instagram from "../../assets/instagram.png";

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
                <Image src={Twitter} alt='twitter' w={"41px"} h={"41px"} objectFit={"cover"}/>
                <Text fontFamily={"Poppins"} fontWeight={600} fontSize={"24px"} lineHeight={"28.07px"} color={"#FFFFFF"}>Twitter</Text>
            </Box>
                
            <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={2}>
            <Image src={Facebook} alt='facebook' w={"22px"} h={"41px"} objectFit={"cover"}/> 
            <Text fontFamily={"Poppins"} fontWeight={600} fontSize={"24px"} lineHeight={"28.07px"} color={"#FFFFFF"}>Facebook</Text>
            </Box>

            <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={2}>
            <Image src={Whatsapp} alt='whatsapp' w={"41px"} h={"41px"} objectFit={"cover"}/>
            <Text fontFamily={"Poppins"} fontWeight={600} fontSize={"24px"} lineHeight={"28.07px"} color={"#FFFFFF"}>WhatsApp</Text>
            </Box>

            <Box display={"flex"} flexDir={"column"} alignItems={"center"} gap={2}>
                <Image src={Instagram} alt='instagram' w={"41px"} h={"41px"} objectFit={"cover"}/>
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