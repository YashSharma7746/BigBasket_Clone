import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
function DemoDiv({ image, title, price }) {
  const [qnty, setQnty] = useState(1);
  return (
    <>
      <Box
        className="hoverBox"
        cursor="pointer"
        boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px"
        mt="1rem"
        w="15%"
        p="13px"
        rounded="md"
        textAlign="center"
      >
        <Box>
          <Image src={image} />
          <Image
            src="https://www.bbassets.com/static/v2608/custPage/build/content/img/vegicon.svg"
            float="left"
            mt="7.2rem"
          />
          <br />
          <Text fontSize="small" mt="-.5rem" float="left">
            Fresho
          </Text>
        </Box>
        <br />
        <Box>
          <Text>{title}</Text>
        </Box>
        <Box>{price}</Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap=".4rem"
          h="2.5rem"
        >
          <Button border="none" bg="white">
            Qty:-
          </Button>
          <Button border="none" bg="white">
            {qnty}
          </Button>
          <Button
            border="none"
            bg="#fee67c 0"
            pb="5px"
            pt="5px"
            pl="7px"
            cursor="pointer"
            onClick={() => setQnty(qnty + 1)}
          >
            ADD
            <Image
              src="https://img.icons8.com/ios/2x/shopping-cart.png"
              h="13px"
              ml="5px"
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default DemoDiv;
