import { Box, Button, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://www.bigbasket.com/media/uploads/banner_images/2211651-bbpl-staples_460_Bangalore.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_Dry_FishBanner_1600x460_070922.jpg"
];

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
      <Box
        w="100%"
        display="flex"
        m="auto"
        mt="4rem"
        gap="1rem"
        justifyContent="center"
      >
        <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_01.png" />
        <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_02.png" />
        <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_03.png" />
        <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_04.png" />
        <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_05.png" />
        <Image src="https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_251022_06.png" />
      </Box>
    </Box>
  );
}

export default TopAdvt;
