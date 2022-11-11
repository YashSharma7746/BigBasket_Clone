import { Box, Button, Image, Input } from "@chakra-ui/react";
import { logo } from "./logo";

function Navbar() {
  return (
    <>
      <Box>
        <Box
          w="80%"
          margin="auto"
          gap="5rem"
          display="flex"
          alignItems="center"
        >
          <Image src={logo} alt="logo" style={{ width: "9rem" }} />
          <Input
            placeholder="Search for Products"
            w="45%"
            h="30px"
            pl="15px"
            ml="-2.5rem"
          />
          <Box w="5rem"></Box>
          <Box padding="2rem" w="10rem">
            <Image
              cursor="pointer"
              src="https://img.icons8.com/ios/2x/shopping-cart.png"
              width="1rem"
              height="1rem"
              marginLeft="3rem"
            />
            <span style={{ cursor: "pointer" }}> My Basket</span>
            <span></span>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Navbar;
