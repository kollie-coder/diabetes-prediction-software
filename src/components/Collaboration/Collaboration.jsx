import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Work from "../../assets/work.png";

const Collaboration = () => {
  return (
   <>
  

   <Flex 
   justifyContent={"space-between"} 
   mb={5} 
   pb={5}
   alignItems={"center"}
   >

    <Box flex={2} display={{base:"none", md:"flex"}}>

        <Image src={Work} alt='work' 
        width={"525px"} height={"548px"} objectFit={"cover"}/>

    </Box>


    <Box flex={1} py={5}>
       <Text
       color = '#000000'
       fontSize = '32px'
       fontFamily = 'Poppins'
       fontWeight = {700}
       lineHeight = '28.07px'
       >
        As a doctor
       </Text>

       <Text
       color = '#000000'
       fontSize = '20px'
       fontFamily = 'Poppins'
       lineHeight = '28.07px'
       fontWeight={400}
       maxW={"410px"}
       py={10}
       >
        Contribute to diabetes research by validating prediction 
        results from diabetespredict via historical patients data
       </Text>

       <Button
       fontSize={"17.55px"}
       fontWeight={700}
       fontFamily={"Poppins"}
       color={"#ffffff"}
       backgroundColor={"#2A4D77"}
       width={"192px"}
       height={"72px"}
       borderRadius={"20px"}
       >
        Research with us
       </Button>
    </Box>

   </Flex>

   <Flex alignContent={"center"} justifyContent={"center"} mt={8} display={{base:"none",md:"flex"}}>
   <Box width={"323px"} height={"9px"} borderRadius={"2px"} backgroundColor={"#D9D9D9"} />

  </Flex>

   </>
  )
}

export default Collaboration