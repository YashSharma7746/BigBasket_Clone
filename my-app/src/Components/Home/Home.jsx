import Topnavbar from "../Navbar/Topnavbar";
import TopAdvt from "./TopAdvt";
import { Link, Flex, Stack, Box, Button, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import DemoDiv from "./DemoDiv";
import "./style.css";
import {
    TiSocialFacebook,
    TiSocialPinterest,
    TiSocialTwitter
  } from "react-icons/ti";
  import { BsInstagram } from "react-icons/bs";
  
const SmartBasket = [
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg",
      title: "Capsicum - Green (Loose)",
      price: "41.00",
      qunty:"500g",
      brand:"Fresho"
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/10000071_14-fresho-carrot-orange.jpg",
      title: "Carrot - Orange (Loose)",
      price: "18.75",
      qunty:"250g",
      brand:"Fresho"
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg",
      title: "Coriander Leaves",
      price: "10.50",
      qunty:"100g",
      brand:"Fresho"
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/10000102_17-fresho-cucumber.jpg",
      title: "Cucumber (Loose)",
      price: "19.50",
      qunty:"1KG",
      brand:"Fresho"
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
      title: "Ladies' Fingers (Loose)",
      price: "23.00",
      qunty:"500g",
      brand:"Fresho"
    }
  ];
  const BankOffers = [
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
  ]
  const BestSellers = [
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/271205_14-id-fresho-idly-dosa-batter.jpg",
      title: "Idly & Dosa Batter",
      price: "55.00",
      qunty:"1 KG"
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/40158282_10-dove-cream-beauty-bathing-bar.jpg",
      title: "Cream Beauty Bathing Bar - For Soft, Smooth Skin",
      price: "652.50",
      qunty:"100 g (Pack of 8)"
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
      title: "Tomato - Hybrid (Loose)",
      price: "19.50",
      qunty:"1 KG"
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/40216129_10-fresho-tender-coconut-water-no-added-sugar-flavours.jpg",
      title: "Tender Coconut Water - No Added Sugar, Flavours",
      price: "35.00",
      qunty:"200 ml Bottle"
    },
    {
      image:
        "https://www.bigbasket.com/media/uploads/p/s/10000404_18-bb-royal-rice-raw-sona-masoori-12-17-months-old.jpg",
      title: "Rice/Akki - Raw, Sona Masoori, 12-17 Months Old",
      price: "514.00",
      qunty:"10 kg Bag"
    }
  ];
  const TopOffers = [
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/91b481ca-1f6a-4550-9c1c-52757c371a96/hp_dow-topoffersStorefront_m_480_251022_01.jpg"
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/91b481ca-1f6a-4550-9c1c-52757c371a96/hp_big-pack-topoffersStorefront_m_480_251022_02.jpg"
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/91b481ca-1f6a-4550-9c1c-52757c371a96/hp_combos-topoffersStorefront_m_480_251022_03.jpg"
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/91b481ca-1f6a-4550-9c1c-52757c371a96/hp_30-corner-topoffersStorefront_m_480_251022_04.jpg"
    }
  ];
  const FruitsVegies = [
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_organic-fnv_Storefront_m_251022_01.jpg"
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_fresh-fruits-fnv_Storefront_m_251022_02.jpg"
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_fresh-veggs-fnv_Storefront_m_251022_03.jpg"
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_cutx-sprouts-fnv_Storefront_m_251022_04.jpg"
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_exotic-fnv_Storefront_m_251022_05.jpg"
    },
    {
      image:
        "https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/7f6ddfd5-93af-4bbd-a250-ce828daa63d6/9801292b-8291-488a-bb4e-7712022dc060/hp_herbs-seasoning-fnv_m_251022_06.jpg"
    }
  ];
  const CleaningHousehold = [
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
  
function Home(){
    return (
        <Box width="100%" margin={"auto"}>
            <Topnavbar/>
            <Box w="100%" m="auto">
                <TopAdvt/>
            </Box>
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
                    My Smart Basket
                </Heading>
                <Box w="80%" m="auto" display="flex" justifyContent="space-between">
                    {SmartBasket.map((item) => {
                        return <DemoDiv key={item.title} {...item} />;
                    })}
                </Box>
            </Box>
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
                {BankOffers.map((item) => {
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
                    Best Sellers
                </Heading>
                <Box w="80%" m="auto" display="flex" justifyContent="space-between">
                    {BestSellers.map((item) => {
                        return <DemoDiv key={item.title} {...item} />;
                    })}
                </Box>
            </Box>
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
                    Top Offers
                </Heading>
                <Box w="80%" m="auto" display="flex" justifyContent="space-between">
                    {TopOffers.map((item) => {
                    //console.log(item);
                    return (
                        <Image
                            className="hoverBox"
                            boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
                            cursor="pointer"
                            key={item.image}
                            w="24%"
                            src={item.image}
                        />
                        );
                    })}
                </Box>
            </Box>
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
                Furits & Vegetables
            </Heading>
            <Box w="80%" m="auto" display="flex" justifyContent="space-between">
                {FruitsVegies.map((item) => {
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
                    {CleaningHousehold.map((item) => {
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
                <Box
        textAlign={"left"}
        width={"75%"}
        margin="auto"
        mt={"2rem"}
        mb={"1rem"}
        border="1px"
        padding={"1rem"}
      >
        <Heading fontSize={"28px"} fontWeight={"400"} mt={"1rem"} mb={"0.5rem"}>
          bigbasket – online grocery store
        </Heading>
        <Box w={"100%"} fontSize={"14px"} fontWeight={"350"}>
          <Text textAlign={"left"}>
            Did you ever imagine that the freshest of fruits and vegetables, top
            quality pulses and food grains, dairy products and hundreds of
            branded items could be handpicked and delivered to your home, all
            atthe click of a button? India’s first comprehensive online
            megastore, bigbasket.com, brings a whopping 20000+ products with
            more than 1000 brands, to over 4 million happy customers. From
            household cleaning products to beauty and makeup, bigbasket has
            everything you need for your daily needs. bigbasket.com is
            convenience personified We’ve taken away all the stress associated
            with shopping for daily essentials, and you can now order all your
            household products and even buy groceries online without travelling
            long distances or standing in serpentine queues. Add to this the
            convenience of finding all your requirements at one single source,
            along with great savings, and you will realize that bigbasket-
            India’s largest online supermarket, has revolutionized the way India
            shops for groceries. Online grocery shopping has never been easier.
            Need things fresh? Whether it’s fruits and vegetables or dairy and
            meat, we have this covered as well! Get fresh eggs, meat, fish and
            more online at your convenience. Hassle-free Home Delivery options
          </Text>
          <Text mt={"1rem"} mb={"1rem"}>
            We deliver to 25 cities across India and maintain excellent delivery
            times, ensuring that all your products from groceries to snacks
            branded foods reach you in time.
          </Text>
          <Box ml={"3rem"}>
            <ul>
              <li>
                <Text>
                  Slotted Delivery: Pick the most convenient delivery slot to
                  have your grocery delivered. From early morning delivery for
                  early birds, to late-night delivery for people who work the
                  late shift, bigbasket caters to every schedule.
                </Text>
              </li>
              <li>
                <Text>
                  Express Delivery: This super useful service can be availed by
                  customers in cities like Bangalore, Mumbai, Pune, Chennai,
                  Kolkata, Hyderabad and Delhi-NCR in which we deliver your
                  orders to your doorstep in 90 Minutes.
                </Text>
              </li>
              <li>
                <Text>
                  BB Specialty stores: Missed out on buying that essential item
                  from your favorite neighborhood store for tonight’s party?
                  We’ll deliver it for you! From bakery, sweets and meat to
                  flowers and chocolates, we deliver your order in 90 minutes,
                  through a special arrangement with a nearby specialty store,
                  verified by us.
                </Text>
              </li>
            </ul>
          </Box>
        </Box>
        <Button variant={"outline"} mt={"1rem"}>
          Read more...
        </Button>
      </Box>
      </Box>
      <Box width={"75%"} margin="auto">
      <Flex
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={0}
        width={"100%"}
        fontSize={"14px"}
        fontWeight={"350"}
        mt={"3rem"}
        padding={"1rem"}
      >
        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={"16px"}>
            bigbasket
          </Text>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>In News</Link>
          <Link href={"#"}>Green bigbasket</Link>
          <Link href={"#"}>Privacy Policy</Link>
          <Link href={"#"}>Affiliate</Link>
          <Link href={"#"}>Terms and Conditions</Link>
          <Link href={"#"}>Careers At bigbasket</Link>
          <Link href={"#"}>bb Instant</Link>
          <Link href={"#"}>bb Daily</Link>
          <Link href={"#"}>bb Blog</Link>
          <Link href={"#"}>bbnow</Link>
        </Stack>
        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={"16px"}>
            Help
          </Text>
          <Link href={"#"}>FAQ's</Link>
          <Link href={"#"}>Contact Us</Link>
          <Link href={"#"}>bb Wallet FAQ's</Link>
          <Link href={"#"}>bb wallet T&Cs</Link>
          <Link href={"#"}>Vendor Connect</Link>
        </Stack>
        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={"16px"}>
            Download Our App
          </Text>
          <Box>
            <img
              src="https://www.bbassets.com/static/v2557/custPage/build/content/img/Google-App-store-icon.png"
              alt=""
            />
          </Box>
          <Box>
            <img
              src="	https://www.bbassets.com/static/v2557/custPage/build/content/img/Apple-App-store-icon.png"
              alt=""
            />
          </Box>
        </Stack>

        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={"16px"}>
            Get Social With Us
          </Text>
          <Flex>
            <Box
              bg={"#3b5998"}
              boxSize={"40px"}
              borderRadius={"50%"}
              mr={"1rem"}
            >
              <TiSocialFacebook color="white" size={"40px"} />
            </Box>
            <Box bg={"red"} boxSize={"40px"} borderRadius={"50%"} mr={"1rem"}>
              <TiSocialPinterest color="white" size={"40px"} />
            </Box>
            <Box bg={"blue"} boxSize={"40px"} borderRadius={"50%"} mr={"1rem"}>
              <TiSocialTwitter color="white" size={"40px"} />
            </Box>
            <Flex
              bg={"#517fa4"}
              boxSize={"40px"}
              borderRadius={"50%"}
              textAlign="center"
              alignItems={"center"}
              justifyContent={"center"}
              mr={"1rem"}
            >
              <BsInstagram color="white" size={"25px"} />
            </Flex>
          </Flex>
        </Stack>
      </Flex>
      <Flex alignItems={"center"}>
        <Text color={"#84c225"} size={"16px"} mr={"2rem"}>
          Payment Otions
        </Text>
        <Box>
          <img
            src="https://github.com/rutuja3562/BigBasket-Clone/blob/master/src/components/Footer/footer.png?raw=true"
            alt=""
          />
        </Box>
      </Flex>
    </Box>
        </Box>
    )
}

export default Home;