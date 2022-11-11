import { Box, Heading } from "@chakra-ui/react";
import DemoDiv from "../Demo/DemoDiv";
import "./style.css";
const data = [
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
    title: "Capsicum - Green (Loose)",
    price: "500 g - Rs 41.00"
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
    title: "Carrot - Orange (Loose)",
    price: "250 g - Rs 18.75"
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
    title: "Coriander Leaves",
    price: "100 g - Rs 10.50"
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000102_17-fresho-cucumber.jpg",
    title: "Cucumber (Loose)",
    price: "1 kg - Rs 19.50"
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
    title: "Ladies' Fingers (Loose)",
    price: "500 g - Rs 23.00"
  }
];

function SmartBasket() {
  return (
    <>
      <Heading
        textAlign="center"
        fontWeight="lighter"
        borderBottom="1px solid grey"
        pb="10px"
        w="80%"
        m="auto"
        mt="2.5rem"
        mb="1rem"
        as="h2"
      >
        My Smart Basket
      </Heading>
      <Box w="80%" m="auto" display="flex" justifyContent="space-between">
        {data.map((item) => {
          return <DemoDiv key={item.title} {...item} />;
        })}
      </Box>
    </>
  );
}

export default SmartBasket;
