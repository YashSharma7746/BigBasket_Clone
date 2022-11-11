import { Box, Heading, Image } from "@chakra-ui/react";
import "./style.css";
const data = [
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_cleaners-disnfectants_m_480_251022_01.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_detetgents-cleaningStorefront_m_480_251022_02.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_kitchen-wipes-m_480_251022_03.jpg"
  },
  {
    image:
      "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/d3dc58d9-5531-4b8c-ae8c-740a6f4dce51/hp_fresheners-repplent-_m_480_251022_04.jpg"
  }
];

function CleaningHousehold() {
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
          Cleaning & Household
        </Heading>
        <Box w="80%" m="auto" display="flex" justifyContent="space-between">
          {data.map((item) => {
            //console.log(item);
            return (
              <Image
                boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
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
export default CleaningHousehold;
