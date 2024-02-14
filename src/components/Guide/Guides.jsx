import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Guide1 from "../../assets/guide1.png";
import Guide2 from "../../assets/guide2.png";
import Guide3 from "../../assets/guide3.png";
 
const Guides = () => {
  return (
    <>
     <GridItem
    borderRight={"2px solid"}
    borderColor={"#f0f0f0"}
    overflow={"hidden"}
    >
     <Box px={7} alignItems={"center"}>

        <Image src={Guide1} alt='guide1' w={"320px"} h={"320px"} objectFit={"cover"} pt={3}/>

        <Text color = '#171717'
         fontSize = '32px' 
         fontFamily = 'Source Sans Pro'
          fontWeight = {700} 
          lineHeight = '48px'
          pb={3}
          >
            Step 1
        </Text>

        <Text
        color = '#171717'
        fontSize = '20px'
        fontFamily = 'Source Sans Pro'
        lineHeight = '30px'
        pb={10}
        >
            Enter your medical data such as glucose, pregnancies, skin thickness,
             blood pressure, insulin, BMI, diabetes predigree function and age
        </Text>

     </Box>

     

    </GridItem>

    <GridItem
    borderRight={"2px solid"}
    borderColor={"#f0f0f0"}
    overflow={"hidden"}
    >
     <Box px={7} alignItems={"center"}>

        <Image src={Guide2} alt='guide1' w={"320px"} h={"320px"} objectFit={"cover"} pt={3}/>

        <Text color = '#171717'
         fontSize = '32px' 
         fontFamily = 'Source Sans Pro'
          fontWeight = {700} 
          lineHeight = '48px'
          pb={3}
          >
            Step 2
        </Text>

        <Text
        color = '#171717'
        fontSize = '20px'
        fontFamily = 'Source Sans Pro'
        lineHeight = '30px'
        pb={10}
        >
           Get the prediction outcome. Receive the result of your diabetes prediction 
            based on the provided medical data
        </Text>

     </Box>

    </GridItem>

    <GridItem
    borderRight={"2px solid"}
    borderColor={"#f0f0f0"}
    overflow={"hidden"}
    >
     <Box px={7} alignItems={"center"}>

        <Image src={Guide3} alt='guide1' w={"320px"} h={"320px"} objectFit={"cover"} pt={3}/>

        <Text color = '#171717'
         fontSize = '32px' 
         fontFamily = 'Source Sans Pro'
          fontWeight = {700} 
          lineHeight = '48px'
          pb={3}
          >
            Step 3
        </Text>

        <Text
        color = '#171717'
        fontSize = '20px'
        fontFamily = 'Source Sans Pro'
        lineHeight = '30px'
        pb={10}
        >
            Understand the result. Our system will provide an analysis of the 
          prediction outcome, helping you to interpret the result
        </Text>

     </Box>

    </GridItem>


    </>
   
  )
}

export default Guides