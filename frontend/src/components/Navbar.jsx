import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode.jsx";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}>
        <Text
          textStyle={{ base: "md", sm: "3xl" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="to-r"
          gradientFrom="cyan.400"
          gradientTo="blue.500"
          bgClip={"text"}>
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spaceX={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
