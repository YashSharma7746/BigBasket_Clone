import { Box, Button, Image, Text } from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {addtoCart} from "../../Redux/product/action"
function DemoDiv({ props}) {
    const dispatch = useDispatch();
    const handleCart = () => {
      console.log(props);
        dispatch(addtoCart(props));
      };
      //console.log(props);
  return (
    <>
      <Box
        className="hoverBox"
        cursor="pointer"
        boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px"
        mt="1rem"
        p="15px"
        rounded="md"
        textAlign="center"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box>
          <Image ml="auto" mr="auto"  src={props.image} />
          <Image
            src="https://www.bbassets.com/static/v2608/custPage/build/content/img/vegicon.svg"
            float="left"
            p="5px"
            
          />
          <br />
          <Text fontSize="small" float="left">
            {props.brand}
          </Text>
        </Box>
        <br />
        <Box>
          <Text>{props.title}</Text>
        </Box>
        <Box>Qnty:- {props.qunty}</Box>
        <Box>Rs. {props.price}</Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap=".4rem"
          h="2.5rem"
        >
          <Button
            border="none"
            bg="#fee67c 0"
            pb="5px"
            pt="5px"
            cursor="pointer"
            mt="10px"
            onClick={() => handleCart()}
          >
            ADD TO CART
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
