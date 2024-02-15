import { Box, Button, Container, Flex, FormControl, FormLabel, HStack, Heading, Input, Stack } from '@chakra-ui/react'
import React from 'react'

const Predict = () => {
  return (
   <Container maxW={"container.xl"}>

    <Stack spacing={8}>
      <Heading 
       fontSize = '32px'
    fontFamily ='Source Sans Pro'
    fontWeight = {700}
    lineHeight ='42px'>
      Fill out your medical data
      </Heading>

     <HStack spacing={"24px"}>

   <FormControl>
  <FormLabel>Pregnancies</FormLabel>
  <Input placeholder='Pregnancies' />
   </FormControl>

   <FormControl>
  <FormLabel>Glucose</FormLabel>
  <Input placeholder='Glucose' />
   </FormControl>
    
   </HStack>


   <HStack spacing={"24px"}>

   <FormControl>
  <FormLabel>BloodPressure</FormLabel>
  <Input placeholder='BloodPressure' />
   </FormControl>

   <FormControl>
  <FormLabel>Skin Thickness</FormLabel>
  <Input placeholder='Skin Thickness' />
   </FormControl>
    
   </HStack>


   <HStack spacing={"24px"}>

   <FormControl>
  <FormLabel>Insulin</FormLabel>
  <Input placeholder='Insulin' />
   </FormControl>

   <FormControl>
  <FormLabel>BMI</FormLabel>
  <Input placeholder='BMI' />
   </FormControl>
    
   </HStack>

   <HStack spacing={"24px"}>

  <FormControl>
  <FormLabel>DiabetesPedigreeFunction</FormLabel>
  <Input placeholder='DiabetesPedigreeFunction' />
  </FormControl>

  <FormControl>
  <FormLabel>Age</FormLabel>
  <Input placeholder='Age' />
  </FormControl>
  
  </HStack>

  <Flex justifyContent={"flex-end"}>
    <Button
  width = '170px'
  height = '58px'
  borderRadius = '24px'
  backgroundColor = '#171717'
  color = '#ffffff'
  fontSize = '20px'
  fontFamily = 'Source Sans Pro'
  fontWeight = {500}
  lineHeight = '26px'
  >
    Continue
    </Button>
  </Flex>
  

      </Stack>
    
    
    </Container>
  )
}

export default Predict