import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <Container maxW={"container.xl"} px={4} > 

      <Flex justifyContent={"space-between"} alignItems={"center"} pt={8}>

        <Link to={"/"}>
    {  /*<Image src={Logo} alt='logo' w={{base:60, lg:80}}/>*/}
       <Text fontSize={{base:"18px", sm:"22px", md:"25px"}} fontWeight={600} fontFamily={"Poppins"} pl={4}>DIABETESPREDICT</Text>
      </Link>

      <Flex gap={4} display={{base:"none", md:"flex"}} pr={8}>
        <Button width={"177px"} height={"64px"} borderRadius={"20px"} padding={"10px"} background='rgba(44, 75, 116, 1)' color={"white"}>
          Get Started
        </Button>

        <Button width={"177px"} height={"64px"} borderRadius={"20px"} padding={"10px"} colorScheme='rgba(44, 75, 116, 1)' variant={"outline"}>
          Try Now
        </Button> 

      </Flex>

      <Box display={{base:'flex',md:"none"}} pr={{base:2, md:4}} >
      
      <RxHamburgerMenu size={"25px"}/>
      </Box>

      </Flex>
      
        
    </Container>
  )
}

export default Navbar