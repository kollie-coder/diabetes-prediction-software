import { Box, Container, Image } from '@chakra-ui/react'
import React from 'react'
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container maxW={"container.2xl"} my={4}>
      <Link to={"/"}>
      <Image src={Logo} alt='logo' w={80}/>
      </Link>
        
    </Container>
  )
}

export default Navbar