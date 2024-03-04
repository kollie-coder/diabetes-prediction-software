import { Box, Button, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <Container maxW={"container.xl"} px={4} > 

      <Flex justifyContent={"space-between"} alignItems={"center"} pt={8}>

     <a href='/'>
    {  /*<Image src={Logo} alt='logo' w={{base:60, lg:80}}/>*/}
       <Text fontSize={{base:"18px", sm:"22px", md:"25px"}} fontWeight={600} fontFamily={"Poppins"} pl={4}>DIABETESPREDICT</Text>
      </a>

      <Flex gap={4} display={{base:"none", md:"flex"}} pr={8}>

      <Link to="guide-section" smooth={true} duration={500}>
        <Button 
        width={"177px"} 
        height={"64px"}
         borderRadius={"20px"}
          padding={"10px"}
           background='rgba(44, 75, 116, 1)' 
           color={"white"}>
          Get Started
        </Button>
        </Link>
        
        <Link to="diagnose-section" smooth={true} duration={500}>

        <Button width={"177px"} 
        height={"64px"} 
        borderRadius={"20px"} 
        padding={"10px"}
         colorScheme='rgba(44, 75, 116, 1)'
         variant={"outline"}>
          Try Now
        </Button> 

        </Link>

      </Flex>

      <Box display={{base:'flex',md:"none"}} pr={{base:2, md:4}} >
      
      <RxHamburgerMenu size={"25px"}/>
      </Box>

      </Flex>
      
        
    </Container>
  )
}

export default Navbar