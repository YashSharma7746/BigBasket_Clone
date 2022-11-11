import { Box, Button, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const images = [
  "https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_pets-store_251022_400.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_cmc_m_health-suppliment_25102_400.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_251022_400_1.jpg",
  "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_251022_400.jpg"
];

function MidAdvt() {
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
    <Box
      w="80%"
      m="auto"
      mt="4rem"
      boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      cursor="pointer"
    >
      <Image w="100%" h="auto" src={images[length]} />
    </Box>
  );
}

export default MidAdvt;
