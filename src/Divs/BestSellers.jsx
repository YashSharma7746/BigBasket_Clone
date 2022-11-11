import { Box, Heading } from "@chakra-ui/react";
import DemoDiv from "../Demo/DemoDiv";
import "./style.css";
const data = [
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/271205_14-id-fresho-idly-dosa-batter.jpg",
    title: "Idly & Dosa Batter",
    price: "1 Kg - Rs 55.00"
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40158282_10-dove-cream-beauty-bathing-bar.jpg",
    title: "Cream Beauty Bathing Bar - For Soft, Smooth Skin",
    price: "100 g (Pack of 8) - Rs 652.50"
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
    title: "Tomato - Hybrid (Loose)",
    price: "1 kg - Rs 19.50"
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
    title: "Tender Coconut Water - No Added Sugar, Flavours",
    price: "200 ml Bottle - Rs 35.00"
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg",
    title: "Rice/Akki - Raw, Sona Masoori, 12-17 Months Old",
    price: "10 kg Bag - Rs 514.00"
  }
];
function BestSeller() {
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
        Best Sellers
      </Heading>
      <Box w="80%" m="auto" display="flex" justifyContent="space-between">
        {data.map((item) => {
          return <DemoDiv key={item.title} {...item} />;
        })}
      </Box>
    </>
  );
}

export default BestSeller;
