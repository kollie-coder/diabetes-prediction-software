import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';

const Predict = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async () => {
    // Get input values
    const pregnancies = parseFloat(document.getElementById('pregnancies').value);
    const glucose = parseFloat(document.getElementById('glucose').value);
    const bloodPressure = parseFloat(document.getElementById('bloodPressure').value);
    const skinThickness = parseFloat(document.getElementById('skinThickness').value);
    const insulin = parseFloat(document.getElementById('insulin').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const diabetesPedigreeFunction = parseFloat(document.getElementById('diabetesPedigreeFunction').value);
    const age = parseFloat(document.getElementById('age').value);

    // Validate input ranges
    if (
      pregnancies < 0 || pregnancies > 17 ||
      glucose < 0 || glucose > 200 ||
      bloodPressure < 0 || bloodPressure > 130 ||
      skinThickness < 0 || skinThickness > 100 ||
      insulin < 0 ||
      bmi < 0 ||
      diabetesPedigreeFunction < 0 ||
      age < 0
    ) {
      setErrorMessage('Please ensure all fields are within the specified ranges.');
      return;
    }
    

    const makeRequest = async () => {
      const url = 'https://diabetes-prediction-wm9s.onrender.com/predict';
      try {
        const response = await axios.post(url, {
          "no_of_preg": pregnancies,
          "Glucose": glucose,
          "BloodPressure": bloodPressure,
          "SkinThickness": skinThickness,
          "Insulin": insulin,
          "BMI": bmi,
          "DiabetesPedigreeFunction": diabetesPedigreeFunction,
          "Age": age
        });
    
        // Handle response data
        console.log(response.data);
      } catch (error) {
        // Handle errors
        console.error('Error occurred:', error);
      }
    };
    
    makeRequest();

   
  };

  return (
    <Container maxW={'container.xl'}>
      <Stack spacing={8}>
        <Heading
          fontSize="32px"
          fontFamily="Source Sans Pro"
          fontWeight={700}
          lineHeight="42px"
        >
          Fill out your medical data
        </Heading>

        <HStack spacing={'24px'}>
          <FormControl>
            <FormLabel>Pregnancies</FormLabel>
            <Input id="pregnancies" placeholder="Pregnancies" />
          </FormControl>

          <FormControl>
            <FormLabel>Glucose</FormLabel>
            <Input id="glucose" placeholder="Glucose" />
          </FormControl>
        </HStack>

        <HStack spacing={'24px'}>
          <FormControl>
            <FormLabel>BloodPressure</FormLabel>
            <Input id="bloodPressure" placeholder="BloodPressure" />
          </FormControl>

          <FormControl>
            <FormLabel>Skin Thickness</FormLabel>
            <Input id="skinThickness" placeholder="Skin Thickness" />
          </FormControl>
        </HStack>

        <HStack spacing={'24px'}>
          <FormControl>
            <FormLabel>Insulin</FormLabel>
            <Input id="insulin" placeholder="Insulin" />
          </FormControl>

          <FormControl>
            <FormLabel>BMI</FormLabel>
            <Input id="bmi" placeholder="BMI" />
          </FormControl>
        </HStack>

        <HStack spacing={'24px'}>
          <FormControl>
            <FormLabel>DiabetesPedigreeFunction</FormLabel>
            <Input id="diabetesPedigreeFunction" placeholder="DiabetesPedigreeFunction" />
          </FormControl>

          <FormControl>
            <FormLabel>Age</FormLabel>
            <Input id="age" placeholder="Age" />
          </FormControl>
        </HStack>

        {errorMessage && (
          <Alert status="error">
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}

        <Flex justifyContent={'flex-end'}>
          <Button
            width="170px"
            height="58px"
            borderRadius="24px"
            backgroundColor="#171717"
            color="#ffffff"
            fontSize="20px"
            fontFamily="Source Sans Pro"
            fontWeight={500}
            lineHeight="26px"
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Predict;