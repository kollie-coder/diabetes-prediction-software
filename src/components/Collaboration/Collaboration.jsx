import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Work from "../../assets/work.png";

const Collaboration = () => {
  return (
   <>
   <Text
    color = '#171717'
    fontSize = '32px'
    fontFamily = 'Source Sans Pro'
    fontWeight = {700}
    lineHeight = '48px'
    pb={5}
    >
        Work with DiabetesPredict
    </Text>

   <Flex 
   justifyContent={"space-between"} 
   borderY={"2px solid #f0f0f0"} 
   mb={5} 
   pb={5}
   gap={"495px"}
   >

    <Box flex={1} display={{base:"none", md:"flex"}}>
        <Image src={Work} alt='work' 
        width={"317px"} height={"336px"} objectFit={"cover"}/>
    </Box>

    <Box flex={1} py={5}>
       <Text
       color = '#171717'
       fontSize = '32px'
       fontFamily = 'Source Sans Pro'
       fontWeight = {700}
       lineHeight = '48px'
       >
        As a doctor
       </Text>

       <Text
       color = '#171717'
       fontSize = '20px'
       fontFamily = 'Source Sans Pro'
       lineHeight = '30px'
       py={5}
       >
        Contribute to diabetes research by validating prediction 
        results from diabetespredict via historical patients data
       </Text>

       <Button
       fontSize={"18px"}
       fontWeight={600}
       color={"#ffffff"}
       backgroundColor={"#171717"}
       width={"192px"}
       height={"62px"}
       borderRadius={"24px"}
       >
        Research with us
       </Button>
    </Box>

   </Flex>
   </>
  )
}

export default Collaboration