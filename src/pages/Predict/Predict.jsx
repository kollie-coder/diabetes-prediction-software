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
  useBreakpointValue,
  Grid,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useShowToast from '../../hooks/useShowToast';

const Predict = () => {

  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []); // Empty dependency array ensures it only runs once when component mounts

  // Determine the number of columns based on screen size
  const columns = useBreakpointValue({ base: 1, md: 2 });


  const handleSubmit = async () => {

    // setting loading state to true
    setIsLoading(true);

    // Get input values
    const pregnancies = parseFloat(document.getElementById('pregnancies').value);
    const glucose = parseFloat(document.getElementById('glucose').value);
    const bloodPressure = parseFloat(document.getElementById('bloodPressure').value);
    const skinThickness = parseFloat(document.getElementById('skinThickness').value);
    const insulin = parseFloat(document.getElementById('insulin').value);
    const bmi = parseFloat(document.getElementById('bmi').value);
    const diabetesPedigreeFunction = parseFloat(document.getElementById('diabetesPedigreeFunction').value);
    const age = parseFloat(document.getElementById('age').value);

    // Check if any input field is empty
    if (
      isNaN(pregnancies) || isNaN(glucose) || isNaN(bloodPressure) ||
      isNaN(skinThickness) || isNaN(insulin) || isNaN(bmi) ||
      isNaN(diabetesPedigreeFunction) || isNaN(age)
    ) {
      showToast("Error", "Please fill out all fields.", "error");
      setIsLoading(false);
      return;
    }
    
    // Validate input ranges
    if (
      pregnancies < 0 || pregnancies > 17 ||
      glucose < 0 || glucose > 200 ||
      bloodPressure < 0 || bloodPressure > 130 ||
      skinThickness < 0 || skinThickness > 100 ||
      insulin < 0 || insulin > 200 ||
      bmi < 0 || bmi > 100 ||
      diabetesPedigreeFunction < 0 || diabetesPedigreeFunction > 3 ||
      age < 21
    ) {
      showToast("Error", "Please ensure all fields are within the specified ranges.", "error");
      setIsLoading(false);
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
  
    // Log the value of response.data.pred
    console.log('Prediction:', response.data.pred);

    
// Convert the string to a number
const prediction = parseInt(response.data.pred);

// Show alert based on prediction result
if (prediction === 1) {
  showToast("Prediction Result", "You might have diabetes, pls contact your doctor", "success")
} else if (prediction === 0) {
  showToast("Prediction Result", "You do not have diabetes", "success")
} else {
  showToast("Error", "Invalid prediction result", "error")
  
}
setIsLoading(false);

  } catch (error) {
   
    console.error('Error occurred:', error);
    showToast("Error", error.message, "Error");
    setIsLoading(false);
  }
};
    makeRequest();
  };

  return (
    <Container maxW={'container.xl'} py={16}>
      <Stack spacing={8}>
        <Heading
          fontSize="32px"
          fontFamily="Source Sans Pro"
          fontWeight={700}
          lineHeight="42px"
        >
          Fill out your medical data
        </Heading>

        
        <Grid
          templateColumns={{ base: '1fr', md: `repeat(${columns}, 1fr)` }}
          gap={8}
        >
          <FormControl>
            <FormLabel>Number of times pregnant</FormLabel>
            <Input id="pregnancies" placeholder="Number of times pregnant, 0 - 17 " />
          </FormControl>

          <FormControl>
            <FormLabel>Plasma glucose</FormLabel>
            <Input id="glucose" placeholder="Plasma glucose, 0 - 200" />
          </FormControl>

          <FormControl>
            <FormLabel>Diastolic blood pressure (mm Hg)</FormLabel>
            <Input id="bloodPressure" placeholder="Diastolic blood pressure (mm Hg), 0 - 130" />
          </FormControl>

          <FormControl>
            <FormLabel>Triceps skin fold thickness (mm)</FormLabel>
            <Input id="skinThickness" placeholder="Triceps skin fold thickness (mm), 0 - 100" />
          </FormControl>

          <FormControl>
            <FormLabel>2-Hour serum insulin (mu U/ml)</FormLabel>
            <Input id="insulin" placeholder="2-Hour serum insulin (mu U/ml), 0 - 200" />
          </FormControl>

          <FormControl>
            <FormLabel>Body mass index (weight in kg/(height in m²))</FormLabel>
            <Input id="bmi" placeholder="Body mass index (weight in kg/(height in m²)), 0 - 100" />
          </FormControl>

          <FormControl>
            <FormLabel>Diabetes Pedigree Function</FormLabel>
            <Input id="diabetesPedigreeFunction" placeholder="Diabetes Pedigree Function, 0 - 3" />
          </FormControl>

          <FormControl>
            <FormLabel>Age (years)</FormLabel>
            <Input id="age" placeholder="Age (years), 21 above" />
          </FormControl>
        </Grid>
       

        <Flex justifyContent={'flex-end'}>
          <Button
            width="170px"
            height="58px"
            borderRadius="24px"
            backgroundColor="rgba(44, 75, 116, 1)"
            color="#ffffff"
            fontSize="20px"
            fontFamily="Source Sans Pro"
            fontWeight={500}
            lineHeight="26px"
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={isLoading}
          >
            Continue
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Predict;