import { Box, Heading, Image } from "@chakra-ui/react";
import "./style.css";
const data = [
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/2a46997a-8de3-47ba-af2d-25e7613f233d/t1_hp_aff_m_bob_360_101122.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/2a46997a-8de3-47ba-af2d-25e7613f233d/t1_hp_aff_m_IndusInd_360_101122.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/2a46997a-8de3-47ba-af2d-25e7613f233d/t1_hp_aff_m_rbl_360_101122.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/2a46997a-8de3-47ba-af2d-25e7613f233d/t1_hp_aff_m_kotak_360_101122.jpg"
  }
];

function BankOffers() {
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
          Bank Offers
        </Heading>
        <Box w="80%" m="auto" display="flex" justifyContent="space-between">
          {data.map((item) => {
            //console.log(item);
            return (
              <Image
                className="hoverBox"
                cursor="pointer"
                key={item.image}
                w="24%"
                src={item.image}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
}
export default BankOffers;
