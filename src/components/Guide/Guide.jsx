import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import Guides from './Guides'

const Guide = () => {
  return (
    <>
     <Box my={5} px={4}>

<Text color='#171717' fontSize='32px' fontFamily='Source Sans Pro'
  fontWeight={700} lineHeight='48px' py={20}>
  How it works
</Text>

<Box>

  <Grid
    templateColumns={{
     
      sm: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
      xl: "repeat(3, 1fr)",
    }}
    gap={1}
    columnGap={1}
    alignItems={"center"}
    justifyItems={"center"}
    mx="auto" // Center the grid horizontally
    maxWidth="1200px" // Set max width for responsiveness
    px={4} // Add horizontal padding
  >
    <Guides />

  </Grid>

</Box>

</Box>

<Flex alignContent={"center"} justifyContent={"center"} mt={20} py={8} display={{ base: "none", md: "flex" }}>
<Box width={"323px"} height={"9px"} borderRadius={"2px"} backgroundColor={"#D9D9D9"} />

</Flex>


    </>
  )
}

export default Guide