import { Box, Flex, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Guide1 from "../../assets/guide1.png";
import Guide2 from "../../assets/guide2.png";
import Guide3 from "../../assets/guide3.png";
 
const Guides = () => {
  return (
    <>
    <Flex gap={4} overflowX="auto" sx={{ '&::-webkit-scrollbar': { display: 'none' } }}>

<Box
  backgroundColor={"#D9D9D9"}
  borderRadius={"8.77px"}
  width={"412.33px"} // Set width to 412.33px
  height={"479px"}
  mb={4} // Add margin bottom for spacing
>
  <Box px={5}>
    <Text
      color='#000000'
      fontSize='24px'
      fontFamily='Poppins'
      fontWeight={600}
      lineHeight='28.07px'
      px={2}
      py={7}
    >
      Step 1
    </Text>
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Image src={Guide1} alt='guide1' w={"198.27px"} h={"198.27px"} objectFit={"cover"} pt={3} />
    </Box>
    <Box
      padding={5}
      mt={2}
      borderRadius={"8.77px"}
      backgroundColor={"#2A4D77"}
      width={"371.09px"}
      height={"173.7px"}
    >
      <Text
        color='#FFFFFF'
        fontSize={['14px', '16px', '17.55px']} // Adjust font size for different screen sizes
        fontFamily='Poppins'
        lineHeight={['22px', '24px', '28.07px']} // Adjust line height for different screen sizes
        fontWeight={400}
      >
        Enter your medical data such as glucose, pregnancies, skin thickness, blood pressure, insulin, BMI, diabetes predigree function and age
      </Text>
    </Box>
  </Box>
</Box>

     

      <Box
       
       backgroundColor={"#D9D9D9"}
       borderRadius={"8.77px"}
       width={"412.33px"} // Set width to 412.33px
       height={"479px"}
       mb={4} // Add margin bottom for spacing
      >
     <Box px={5}>

     <Text 
         color = '#000000'
         fontSize = '24px' 
         fontFamily = 'Poppins'
          fontWeight = {600} 
          lineHeight = '28.07px'
          px={2} 
          py={7}
          >
            Step 2
        </Text>
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
       <Image src={Guide2} alt='guide1' w={"198.27px"} h={"198.27px"} objectFit={"cover"} pt={3}/>
    </Box>
       

    <Box
      padding={5} 
      mt={2} 
      borderRadius={"8.77px"}
      backgroundColor={"#2A4D77"}
      width={"371.09px"}
      height={"173.7px"}
    >
      <Text
        color='#FFFFFF'
        fontSize={['14px', '16px', '17.55px']} // Adjust font size for different screen sizes
        fontFamily='Poppins'
        lineHeight={['22px', '24px', '28.07px']} // Adjust line height for different screen sizes
        fontWeight={400}
      >
           Get the prediction outcome. Receive the result of your diabetes prediction 
            based on the provided medical data
        </Text>
        </Box>

     </Box>

    </Box>


    <Box
        
        backgroundColor={"#D9D9D9"}
        borderRadius={"8.77px"}
        width={"412.33px"} // Set width to 412.33px
        height={"479px"}
        mb={4} // Add margin bottom for spacing
      >
     <Box px={5}>

     <Text 
         color = '#000000'
         fontSize = '24px' 
         fontFamily = 'Poppins'
          fontWeight = {600} 
          lineHeight = '28.07px'
          px={2} 
          py={7}
          >
            Step 3
        </Text>

      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} >
         <Image src={Guide3} alt='guide1' w={"198.27px"} h={"198.27px"} objectFit={"cover"} />
      </Box>
       

           <Box
      padding={5} 
      mt={2} 
      borderRadius={"8.77px"}
      backgroundColor={"#2A4D77"}
      width={"371.09px"}
      height={"173.7px"}
    >
      <Text
        color='#FFFFFF'
        fontSize={['14px', '16px', '17.55px']} // Adjust font size for different screen sizes
        fontFamily='Poppins'
        lineHeight={['22px', '24px', '28.07px']} // Adjust line height for different screen sizes
        fontWeight={400}
      >
            Understand the result. Our system will provide an analysis of the 
          prediction outcome, helping you to interpret the result
        </Text>
       </Box>
        

     </Box>

    </Box>

    </Flex>
    


    </>
   
  )
}

export default Guides