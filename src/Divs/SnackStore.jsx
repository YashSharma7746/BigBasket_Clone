import { Box, Heading, Image } from "@chakra-ui/react";
import "./style.css";
const data = [
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_namkeens-snacksStorefront_m_480_251022_01.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_frozen-snacks-snacksStorefront_m_480_251022_02.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_soups-noodles-snacksStorefront_m_480_251022_03.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_ready-cook-snacksStorefront_m_480_251022_04.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_biscuit-cookies-snacksStorefront_m_480_251022_05.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/307d4a8d-5ffb-43c3-a70e-59d26c671cc2/hp_chocolates-snacksStorefront_m_480_251022_06-13.jpg"
  }
];
function SnackStore() {
  //console.log(data.length);
  return (
    <>
      <Box>
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
          Snack Store
        </Heading>
        <Box w="80%" m="auto" display="flex" justifyContent="space-between">
          {data.map((item) => {
            //console.log(item);
            return (
              <Image
                className="hoverBox"
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                cursor="pointer"
                key={item.image}
                w="15%"
                src={item.image}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}
export default SnackStore;
