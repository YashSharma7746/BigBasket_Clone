import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {fetchtoCart, removeItem} from "../../Redux/product/action";
import { Box, Button, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Topnavbar from "../Navbar/Topnavbar";
import { CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
function Cart(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.products.cart);
    console.log(cart);
    useEffect(() => {
      dispatch(fetchtoCart());
    }, [dispatch, cart.length]);
    const handleDelet = (id) => {
      dispatch(removeItem(id));
    };
    let saved = 0;
    const [x, setX] = useState(1);
  
    const total = cart.reduce(function (acc, cv) {
      return acc + Math.floor(cv.price);
    }, 0);
    return (
      <Box width="100%">
        <Topnavbar />
        <Box width="75%" m={"auto"}>
          <Box
            width="100%"
            margin="auto"
            p="1rem"
            mt="1.5rem"
            border="1px solid #e8e8e8"
          >
            <CloseIcon float="right" mb="10px" onClick={() => navigate("/")} cursor="pointer" />
            <Text
              fontSize={"24px"}
              textAlign={"left"}
              fontWeight={300}
              borderBottom={"1px solid #e8e8e8"}
              pb={"6px"}
            >
              YOUR BASKET {cart.length}
            </Text>
            <TableContainer width="99%">
              <Table variant="simple">
                <Thead width="99%">
                  <Tr
                    bg={"#555555"}
                    color={"white"}
                    justifyContent={"space-between"}
                  >
                    <Th color={"white"}>ITEM DESCRIPTION</Th>
                    <Th color={"white"}>UNIT PRICE</Th>
                    <Th color={"white"}>QUANTITY</Th>
                    <Th color={"white"}>SUBTOTAL</Th>
                    <Th color={"#555555"}>......</Th>
                    <Th color={"black"} bg={"#c6cc74"}>
                      Saving
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {cart.map((e) => {
                    {
                      saved =
                        saved +
                        (Math.floor(e.price) -
                          Math.floor(e.price - (10 * e.price) / 100));
                      // console.log("saved",saved)
                    }
                    return (
                      <Tr
                        key={e._id}
                        fontSize={"12px"}
                        justifyContent={"space-between"}
                      >
                        <Td fontSize={"12px"}>
                          {e.brand}
                          <br></br>
                          {e.title}
                        </Td>
                        <Td>
                          Rs {Math.floor(e.price - (10 * e.price) / 100)}
                          <br></br>
                          <span textDecoration={"line-through"}>
                            Rs {Math.floor(e.price)}
                          </span>
                        </Td>
                        <Td>
                          <Button
                            disabled={x <= 1}
                            variant={"outline"}
                            m={"2px"}
                            onClick={() => setX(x - 1)}
                          >
                            -
                          </Button>
                          <Button variant={"outline"} m={"2px"}>
                            {x}
                          </Button>
                          <Button
                            disabled={x > 4}
                            variant={"outline"}
                            m={"2px"}
                            onClick={() => setX(x + 1)}
                          >
                            +
                          </Button>
                        </Td>
                        <Td>
                          Rs {Math.floor((e.price - (10 * e.price) / 100) * x)}
                        </Td>
                        <Td>
                          <CloseIcon onClick={() => handleDelet(e._id)} />
                        </Td>
                        <Td>
                          {" "}
                          Rs{" "}
                          {Math.floor(
                            e.price - Math.floor(e.price - (10 * e.price) / 100)
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
            <Flex justifyContent={"space-between"} mt={8}>
              <Box width={"45%"} border="1px solid #e8e8e8 ">
                <Flex
                  justifyContent={"space-between"}
                  p="1rem"
                  textAlign={"left"}
                  fontSize="14px"
                  fontWeight={400}
                >
                  <Box>
                    <Text>SubTotal</Text>
                    <Text>Delivery Charges</Text>
                  </Box>
                  <Box>
                    <Text>Rs {Math.floor((total - saved) * x)}</Text>
                    <Text>***</Text>
                  </Box>
                  <Box borderLeft={"1px solid #e8e8e8"} color="red" pl="2px">
                    <Text>You saved!</Text>
                    <Text>Rs {Math.floor(saved)}</Text>
                  </Box>
                </Flex>
                <Flex
                  textAlign={"left"}
                  border={"1px solid #e8e8e8"}
                  padding="2rem"
                  justify={"space-around"}
                >
                  <Heading as={"h6"} fontWeight="250">
                    TOTAL{" "}
                  </Heading>
                  <Heading as={"h6"} fontWeight="250">
                    {" "}
                    RS {Math.floor(total - saved)}
                  </Heading>
                </Flex>
                <Box float={"right"}>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      if (cart.length !== 0) {
                        navigate("/checkout");
                      } else {
                        alert(
                          "Your Cart is Empty, Please Add items into cart and after check it out"
                        );
                        navigate("/product");
                      }
                    }}
                  >
                    {" "}
                    CheckOut
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    )
}

export default Cart