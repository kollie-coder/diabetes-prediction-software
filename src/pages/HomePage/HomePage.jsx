import React from 'react'
import Hero from '../../components/Hero/Hero'
import { Container } from '@chakra-ui/react'
import Guide from '../../components/Guide/Guide'
import Diagnose from '../../components/Diagnose/Diagnose'
import Collaboration from '../../components/Collaboration/Collaboration'

const HomePage = () => {
  return (
   <>
   <Container maxW={"container.xl"}>
    <Hero/>
    <Guide/>
     <Diagnose/>
     <Collaboration/>
   </Container>
   </>
  )
}

export default HomePage