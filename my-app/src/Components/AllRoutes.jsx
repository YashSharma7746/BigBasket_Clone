import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout";
import Home from "./Home/Home";
import Payment from "./Payment";
import Product from "./Product/Product";
import ProductDetails from "./Product/ProductDetails";

function AllRoutes(){
    return <Box w="100%">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/product" element={<Product/>} />
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/payment" element={<Payment/>} />
        </Routes>
    </Box>
}
export default AllRoutes