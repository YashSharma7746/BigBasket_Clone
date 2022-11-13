import { Box, Flex, Image, useDisclosure, Text, Button, Input, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import {PhoneIcon, SearchIcon, ChevronDownIcon} from "@chakra-ui/icons";
import {ImLocation2} from "react-icons/im";
import {AiOutlineUser} from "react-icons/ai";
import {BsBasket3} from "react-icons/bs";
import styles from "./navbar.module.css";
import CartLength from "../CartLength";
import LogedIn from "../Login/LogedIn";

function Topnavbar(){
    const navigate = useNavigate();
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <Box width={"75%"} margin="auto">
            <Box>
                <Box display={"flex"} borderWidth="1px" overflow={"hidden"} paddingBottom="3px">
                    <Box width={"20%"}>
                        <Link to="/">
                            <Image src="https://www.bbassets.com/static/staticContent/bb_logo.png" alt="logo"/>
                        </Link>
                    </Box>
                    <Box width={"78%"} ml="2rem">
                        <Box width={'100%'} float="right">
                            <Flex float={"right"} width="100%" padding={"0.25rem 0 0 0"} fontWeight="400" fontSize="14px" alignItems={"center"} justifyContent="flex-end">
                                <Box mr={"1rem"}>
                                    <Flex alignItems={"center"}>
                                        <PhoneIcon mr={"0.5rem"} />
                                        <Text>1860 123 1000</Text>
                                    </Flex>
                                </Box>
                                <Box mr={"1rem"}>
                                    <Flex alignItems={"center"}>
                                        <Box mr={"0.5rem"}>
                                            <ImLocation2 size="16px" />
                                        </Box>
                                        <Text>56004 Bangalore</Text>
                                    </Flex>
                                </Box>
                                <Box mr={"1rem"}>
                                    <Flex alignItems={"center"}>
                                        <Box mr={"0.5rem"}>
                                            <AiOutlineUser size="16px" />
                                        </Box>
                                        <Box>
                                            <LogedIn />
                                        </Box>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                        <Box mt="2rem">
                            <Flex width={"100%"} justifyContent={"space-between"}>
                                <Flex width={"65%"} alignItems="center">
                                    <Input
                                        height={"1.5rem"}
                                        type="text"
                                        colorScheme="white"
                                        variant="outline"
                                        placeholder="Search for Products..."
                                        _hover={{ bg: "white" }}
                                        _expanded={{ bg: "white" }}
                                        _focus={{ boxShadow: "#84c225" }}
                                        focusBorderColor="#84c225"
                                        errorBorderColor="#84c225"
                                        borderRadius="0"
                                        borderWidth="0.025px"
                                    />
                                    <Button
                                        _hover={{ bg: "white" }}
                                        _expanded={{ bg: "white" }}
                                        variant="outline"
                                        focusBorderColor="#84c225"
                                        errorBorderColor="#84c225"
                                        borderRadius="0"
                                        borderWidth="1px"
                                        height={"1.6rem"}
                                        bg="#84c225"
                                        color="white"
                                        padding={"2.5px"}
                                        ml="-1px"
                                    >
                                        <SearchIcon />
                                    </Button>
                                </Flex>
                                <Flex
                                width="16%"
                                // justifyContent={"space-between"}
                                bg={" #e8e8e8"}
                                height={"60px"}
                                onClick={() => {
                                    navigate("/cart");
                                }}
                                >
                                    <Flex
                                        ml={"20px"}
                                        mr="1rem"
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                    >
                                        <Image src="https://img.icons8.com/ios/2x/shopping-cart.png" width="20px"/>
                                    </Flex>
                                    <Flex
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        flexDirection={"column"}
                                    >
                                        <Text fontSize={"12px"}>My Basket</Text>
                                        <Flex>
                                            <CartLength /> <Text ml={2}>Items</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
                <Box borderWidth="1px" overflow="hidden">
                    <Flex alignItems={"center"}>
                        <Box>
                            <Menu border={"1px solid green"} width={"100%"} isOpen={isOpen}>
                                <Box>
                                    <MenuButton
                                        onMouseEnter={onOpen}
                                        onMouseLeave={onClose}
                                        as={Button}
                                        transition="all 0.2s"
                                        borderRadius="0"
                                        variant="ghost"
                                        borderWidth="1px"
                                        borderColor="white"
                                        focusBorderColor="white"
                                        colorScheme=""
                                        bg="#84c225"
                                        _hover={{ bg: "#84c225" }}
                                        _expanded={{ bg: "#84c225" }}
                                        _focus={{ boxShadow: "none" }}
                                        rightIcon={<ChevronDownIcon />}
                                        fontSize="12px"
                                        fontWeight={500}
                                    >
                                        SHOP BY CATEGORY
                                    </MenuButton>
                                    <Flex>
                                        <MenuList
                                        bg={"white"}
                                        width={"1080px"}
                                        fontSize="14px"
                                        fontWeight={"300"}
                                        borderRadius={0}
                                        onMouseEnter={onOpen}
                                        onMouseLeave={onClose}
                                        >
                                            <Flex>
                                                <div className={styles.borderright}>
                                                    <Link to="/product">
                                                        <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                            Fruits & Vegetables
                                                        </MenuItem>
                                                    </Link>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Foodgrains, Oil & Masala
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Bakery, Cakes & Dairy
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Beverages
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Snakes & Branded Foods
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Beauty & Hygiene
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Cleaning & Household
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Kitchen, Garden & Pets
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Eggs, Meat & Fish
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Gourmet & World Food
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        Baby Cary
                                                    </MenuItem>
                                                    <MenuItem borderBottom={"1px solid #e8e8e8"}>
                                                        View All
                                                    </MenuItem>
                                                </div>
                                                <div className={styles.bg_grey}>
                                                <MenuItem>Fresh Vegitables</MenuItem>
                                                <MenuItem>Herbs & Seasonings</MenuItem>
                                                <MenuItem>Fresh Fruits</MenuItem>
                                                <MenuItem>Organic Fruits & Vegetables</MenuItem>
                                                <MenuItem>Cuts & Sprouts</MenuItem>
                                                <MenuItem>Exotic Fruits & Veggies</MenuItem>
                                                <MenuItem>Flower Bouquets, Bunches</MenuItem>
                                                </div>
                                                <div className={styles.borderright}>
                                                <MenuItem>Potato, Onion & Tomato</MenuItem>
                                                <MenuItem>Cucumber & Capsicum</MenuItem>
                                                <MenuItem>Leafy Vegetables</MenuItem>
                                                <MenuItem>Root Vegetables</MenuItem>
                                                <MenuItem>Beans, Brinjals & Okra</MenuItem>
                                                <MenuItem>Cabbage & Cauliflower</MenuItem>
                                                <MenuItem>Gourd, Pumpkin, Drumstic</MenuItem>
                                                <MenuItem>Specialty</MenuItem>
                                                </div>
                                                <div className={styles.fs12}>
                                                    <MenuItem
                                                        fontSize={"16"}
                                                        fontWeight={300}
                                                        color={"#84c225"}
                                                    >
                                                        Popular Searches
                                                    </MenuItem>
                                                    <MenuItem>Vegetables</MenuItem>
                                                    <MenuItem>Tomato</MenuItem>
                                                    <MenuItem>Onion</MenuItem>
                                                    <MenuItem>Potato</MenuItem>
                                                    <MenuItem>Vegitable</MenuItem>
                                                    <MenuItem>Carrat</MenuItem>
                                                </div>
                                            </Flex>
                                        </MenuList>
                                    </Flex>
                                </Box>
                            </Menu>
                        </Box>
                        <Box>
                        <button className={styles.outlinebutton}>OFFERS</button>
                        </Box>
                        <Box>
                        <button className={styles.outlinebutton}>BB SPLECIALITY</button>
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default Topnavbar;