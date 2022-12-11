import { Box, Button, Image, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://www.bigbasket.com/media/uploads/banner_images/2211651-bbpl-staples_460_Bangalore.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_1600x460_070922.jpg"
];
/*
<SimpleGrid w="80%" columns={{ base: 1, sm: 2, md:3, lg: 4, "2xl": 5 }} m="auto" gap="15px">
                    {SmartBasket.map((item) => {
                        return <DemoDiv key={item.id} props={item} />;
                    })}
                </SimpleGrid>
*/
function TopAdvt() {
  const ref = useRef(null);
  const timeout = useRef(null);
  const [length, setLength] = useState(0);
  useEffect(() => {
    ref.current = setTimeout(() => {
      length === images.length - 1 ? setLength(0) : setLength((i) => i + 1);
    }, 4000);
    timeout.current = setTimeout(() => {
      clearInterval(ref.current);
    }, 4000);
    return () => {
      clearInterval(ref.current);
      clearTimeout(timeout.current);
    };
  }, [length]);

  //console.log(images[length], length);
  return (
    <Box w="100%">
      <Image w="100%" mt="1rem" h="auto" src={images[length]} />
      <Box
        w="100%"
        margin="auto"
        display="flex"
        justifyContent="center"
        gap=".25rem"
        marginTop="-3.9rem"
      >
        <Button
          style={
            length === 0
              ? {
                  cursor: "pointer",
                  border: "none",
                  padding: "1rem",
                  borderBottom: "10px solid green"
                }
              : {
                  cursor: "pointer",
                  padding: "1rem",
                  border: "none",
                  borderBottom: "none"
                }
          }
        >
          Offer on Staples
        </Button>
        <Button
          style={
            length === 1
              ? {
                  cursor: "pointer",
                  border: "none",
                  padding: "1rem",
                  borderBottom: "10px solid green"
                }
              : {
                  cursor: "pointer",
                  padding: "1rem",
                  border: "none",
                  borderBottom: "none"
                }
          }
        >
          Fresho Meat
        </Button>
      </Box>
      <SimpleGrid
        w="100%"
        m="auto"
        mt="4rem"
        columns={{ base: 1, sm: 3, md:3, lg: 6, "2xl": 6 }}
        gap="25px" 
        >
        <Image w='80%' src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_01.png" />
        <Image w='80%' src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_02.png" />
        <Image w='80%' src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_03.png" />
        <Image w='80%' src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_04.png" />
        <Image w='80%' src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_05.png" />
        <Image w='80%' src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_06.png" />
      </SimpleGrid>
    </Box>
  );
}

export default TopAdvt;
