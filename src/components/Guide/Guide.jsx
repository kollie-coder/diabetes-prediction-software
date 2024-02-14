import { Box, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import Guides from './Guides'

const Guide = () => {
  return (
    <>
    <Box borderTop={"2px solid #f0f0f0"} my={5}>

        <Text color = '#171717' fontSize = '32px'fontFamily = 'Source Sans Pro' 
        fontWeight = {700} lineHeight = '48px' py={5}>
             How it works 
          </Text>

      <Box borderY={"2px solid #f0f0f0"}>

       <Grid
       templateColumns={{
        sm:"repeat(1, 1fr)",
        md:"repeat(3, 1fr)",
       }}
       gap={1}
       columnGap={1}
       >
        <Guides />

       </Grid>

      </Box>
      
    </Box>
   
    </>
  )
}

export default Guide