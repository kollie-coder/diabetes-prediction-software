import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import DiagnosePic from "../../assets/diagnose.png";
import { Link } from 'react-router-dom';

const Diagnose = () => {
  return (
    <>
    <Flex 
    justifyContent={"space-between"}
     borderBottom={"2px solid #f0f0f0"} 
     my={10} pb={5}
     gap={"194px"}
     >

    <Box flex={1}>
        
        <Text
        color = '#171717'
        fontSize = '32px'
        fontFamily = 'Source Sans Pro'
        fontWeight = {700}
        lineHeight ='48px'
        >
            Predict diabetes effortlessly
            
        </Text>

        <Text color = '#171717'
            fontSize = '20px'
            fontFamily = 'Source Sans Pro'
            lineHeight = '30px'
            py={5}
            >
            Receive accurate diabetes prediction by inputing your medical data
             into our advanced machine learning model
             </Text>
             
      <Link to={"/predict"}>
      <Button
              fontSize={"18px"}
                borderRadius={"24px"}
                backgroundColor={"#171717"}
                  color={"#ffffff"}
                  width={"177px"}
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
             width={"360px"} 
             height={"360px"}
             objectFit={"cover"}
             />
        </Box>

    </Flex>
    </>
  )
}

export default Diagnose