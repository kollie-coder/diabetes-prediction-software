import { Box, Button, Container, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <Container maxW={"container.2xl"} >

      <Flex justifyContent={"space-between"} alignItems={"center"}>

        <Link to={"/"}>
      <Image src={Logo} alt='logo' w={80}/>
      </Link>

      <Flex gap={4} display={{base:"none", md:"flex"}}>
        <Button width={"177px"} height={"64px"} borderRadius={"20px"} padding={"10px"} background='rgba(44, 75, 116, 1)' color={"white"}>
          Get Started
        </Button>

        <Button width={"177px"} height={"64px"} borderRadius={"20px"} padding={"10px"} colorScheme='rgba(44, 75, 116, 1)' variant={"outline"}>
          About Us
        </Button> 

      </Flex>

      <Box display={{base:'flex',md:"none"}} >
      
      <RxHamburgerMenu size={"25px"}/>
      </Box>

      </Flex>
      
        
    </Container>
  )
}

export default Navbar