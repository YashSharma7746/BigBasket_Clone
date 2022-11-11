import { Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import "./style.css";

function Beverages() {
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
        Beverages
      </Heading>

      <Grid
        w="80%"
        m="auto"
        mt="2.5rem"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap="1rem"
      >
        <GridItem rowSpan={2} colSpan={2}>
          <Image
            cursor="pointer"
            w="100%"
            h="100%"
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_hot-sips-beveragesStorefront_m_251022_560x378_01.jpg"
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Image
            cursor="pointer"
            h="100%"
            w="100%"
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_coost-beveragesStorefront_m_251022_275x184_02.jpg"
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Image
            cursor="pointer"
            h="100%"
            w="100%"
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_coffee-beveragesStorefront_m_251022_275x184_03.jpg"
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Image
            cursor="pointer"
            w="100%"
            h="100%"
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_health-beveragesStorefront_m_251022_275x184_04.jpg"
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          />
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Image
            cursor="pointer"
            w="100%"
            h="100%"
            src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/c9120807-7db5-4f39-9895-3b03dee91c54/hp_energy-beveragesStorefront_m_251022_275x184_05.jpg"
            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default Beverages;
