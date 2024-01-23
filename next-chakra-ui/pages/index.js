import {
  Flex,
  Heading,
  Input,
  Button,
  Box,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const Home = () => {
  const { toggleColorMode } = useColorMode();
  const formBackGround = useColorModeValue("gray.300", "gray.700");
  const [toggle, setToggle] = useState(false);

  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        direction={"column"}
        background={"gray.300"}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="your email"
          variant={"filled"}
          mb={3}
          type="email"
        />
        <Input
          placeholder="your password"
          variant={"filled"}
          mb={6}
          type="password"
        />
        <Button colorScheme={"teal"}>Log In</Button>
        <Box
          position={"absolute"}
          top={3}
          right={4}
          cursor={"pointer"}
          onClick= {() => {
            toggleColorMode();
            setToggle(!toggle);
          }}
        >
          {toggle ? <IoMoon /> : <IoSunny />}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
