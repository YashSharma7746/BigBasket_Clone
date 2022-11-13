import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { fetchtoCart } from "../Redux/product/action";
function CartLength(){
    const cart = useSelector((state)=>state.products.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchtoCart());
    },[])
    return <Box>
        <Text>{cart.length}</Text>
    </Box>
}

export default CartLength;