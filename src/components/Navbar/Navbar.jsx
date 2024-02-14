import { Box, Container, Image } from '@chakra-ui/react'
import React from 'react'
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <Container maxW={"container.2xl"} my={4}>
        <Image src={Logo} alt='logo' w={80}/>
    </Container>
  )
}

export default Navbar