import { Box, Heading, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (

    <Box
      bg="white"
      borderRadius="md"
      overflow="hidden"
      boxShadow="sm"
      maxW="sm"
      
      _hover={{ boxShadow: "md" }}
    >
    
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        w="100%" h="150px"
      />

      <VStack align="start" p={4} spacing={3}>
        <Heading size="md">{title}</Heading>
         <Text color="gray.600" fontSize="sm">{description}</Text>

        <HStack spacing={1} cursor="pointer" color="blue.600" fontWeight="semibold">
          <Text fontSize="sm">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
  
    
  </Box>
)};

export default Card;
