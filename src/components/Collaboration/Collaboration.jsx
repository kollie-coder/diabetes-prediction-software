import { Box, Button, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import Work from "../../assets/work.png";

const Collaboration = () => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <Flex
        direction={isLargerThanMD ? "row" : "column"}
        justifyContent={isLargerThanMD ? "space-between" : "center"}
        mb={5}
        pb={5}
        alignItems={isLargerThanMD ? "center" : "initial"}
        pl={4}
      >
        {isLargerThanMD && (
          <Box flex={2} mb={0}>
            <Image
              src={Work}
              alt='work'
              width={{sm:"370px", lg:"525px"}} // Adjust width based on screen size
              maxWidth="100%" // Ensure image doesn't overflow container
              height="auto" // Maintain aspect ratio
              objectFit="cover"
            />
          </Box>
        )}

        <Box flex={1} py={isLargerThanMD ? 0 : 5} width={{sm: "100%", lg: "410px"}}> {/* Adjust width based on screen size */}
          <Text
            color='#000000'
            fontSize='32px'
            fontFamily='Poppins'
            fontWeight={700}
            lineHeight='28.07px'
          >
            As a doctor
          </Text>

          <Text
            color='#000000'
            fontSize='20px'
            fontFamily='Poppins'
            lineHeight='28.07px'
            fontWeight={400}
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
            Get Started
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Collaboration;