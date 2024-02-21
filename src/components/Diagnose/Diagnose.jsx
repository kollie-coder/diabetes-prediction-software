import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import DiagnosePic from "../../assets/diagnose.png";
import { Link } from 'react-router-dom';

const Diagnose = () => {
  return (
    <>
    <Flex 
    justifyContent={"space-between"}
     my={10} pb={5}
     gap={"194px"}
     alignItems={"center"}
     justifyItems={"center"}
     >

    <Box flex={1}>
        
        <Text
        color = '#000000'
        fontSize = '32px'
        fontFamily = 'Poppins'
        fontWeight = {700}
        lineHeight ='28.07px'
        py={4}
        >
            Predict diabetes effortlessly
            
        </Text>

        <Text
            color = '#000000'
            fontSize = '20px'
            fontFamily = 'Poppins'
            lineHeight = '28.07px'
            fontWeight={400}
            py={5}
            maxW={"435px"}
            >
            Receive accurate diabetes prediction by inputing your medical data
             into our advanced machine learning model
             </Text>
             
      <Link to={"/predict"}>
      <Button
              fontSize={"17.55px"}
              fontFamily={"Poppins"}
              fontWeight={700}
                borderRadius={"20px"}
                backgroundColor={"#2A4D77"}
                  color={"#ffffff"}
                  width={"162px"}
                  height={"62px"}
                  mt={10}
                  >
                  Try Now
              </Button>

      </Link>
 
       

    </Box>

   

        <Box 
        flex={1}
         display={{base:"none", md:"flex"}}
         >
            <Image src={DiagnosePic} 
            alt='diagnose'
             width={"525px"} 
             height={"548px"}
             objectFit={"cover"}
             />
        </Box>

    </Flex>

    <Flex alignContent={"center"} justifyContent={"center"} py={8} mb={6} display={{base:"none",md:"flex"}}>
   <Box width={"323px"} height={"9px"} borderRadius={"2px"} backgroundColor={"#D9D9D9"} />

</Flex>

    </>
  )
}

export default Diagnose