import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import Guides from './Guides'

const Guide = () => {
  return (
    <>
     <Box my={5} id="guide-section">

<Text color='#171717' fontSize='32px' fontFamily='Source Sans Pro'
  fontWeight={700} lineHeight='48px' py={{base:10, md:20}} mt={{base:20,md:0}}>
  How it works
</Text>

<Flex gap={4} flexDirection={"row"}>

    <Guides />


</Flex>

</Box>

<Flex alignContent={"center"} justifyContent={"center"} mt={20} py={8} display={{ base: "none", md: "flex" }}>
<Box width={"323px"} height={"9px"} borderRadius={"2px"} backgroundColor={"#D9D9D9"} />

</Flex>


    </>
  )
}

export default Guide