import { useState } from "react";
import { Box, Button, Center, Container, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const moodCards = [
  {
    mood: "Happy",
    image: 'https://images.unsplash.com/photo-1590698933947-a202b069a861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhY2V8ZW58MHx8fHwxNzEyNzc2MzA1fDA&ixlib=rb-4.0.3&q=80&w=1080',
    colorScheme: "pink",
  },
  {
    mood: "Energized",
    image: 'https://images.unsplash.com/photo-1663426242582-7c707af07128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbmVyZ2l6ZWQlMjBwZXJzb258ZW58MHx8fHwxNzEyNzc2MzA2fDA&ixlib=rb-4.0.3&q=80&w=1080',
    colorScheme: "orange",
  },
  {
    mood: "Tired",
    image: 'https://images.unsplash.com/photo-1554188572-9d184b57d8e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aXJlZCUyMHBlcnNvbnxlbnwwfHx8fDE3MTI3NzYzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080',
    colorScheme: "blue",
  },
  {
    mood: "Anxious",
    image: 'https://images.unsplash.com/photo-1473106995954-101fc128abc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbnhpb3VzJTIwcGVyc29ufGVufDB8fHx8MTcxMjc3NjMwOXww&ixlib=rb-4.0.3&q=80&w=1080',
    colorScheme: "red",
  },
  {
    mood: "Motivated",
    image: 'https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3RpdmF0ZWQlMjBwZXJzb258ZW58MHx8fHwxNzEyNzc2MzExfDA&ixlib=rb-4.0.3&q=80&w=1080',
    colorScheme: "green",
  },
];

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const toast = useToast();

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : moodCards.length - 1));
    } else {
      setCurrentCardIndex((prevIndex) => (prevIndex < moodCards.length - 1 ? prevIndex + 1 : 0));
    }
    toast({
      title: `You are feeling ${moodCards[currentCardIndex].mood}`,
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const { mood, image, colorScheme } = moodCards[currentCardIndex];

  return (
    <Container maxW="xl" centerContent>
      <Heading my={4}>How are you feeling today?</Heading>
      <Center py={6}>
        <Stack spacing={4} align="center">
          <Box maxW={"320px"} w={"full"} bg={colorScheme + ".100"} boxShadow={"2xl"} rounded={"lg"} p={6} textAlign={"center"}>
            <Image src={image} height={230} width={282} objectFit={"cover"} borderRadius="lg" />
            <Text fontWeight={600} color={colorScheme + ".500"} mt={4}>
              {mood}
            </Text>
          </Box>
          <Flex>
            <Button leftIcon={<FaArrowLeft />} colorScheme={colorScheme} variant="outline" onClick={() => handleSwipe("left")} mr={2}>
              Previous
            </Button>
            <Button rightIcon={<FaArrowRight />} colorScheme={colorScheme} variant="outline" onClick={() => handleSwipe("right")}>
              Next
            </Button>
          </Flex>
        </Stack>
      </Center>
    </Container>
  );
};

export default Index;
