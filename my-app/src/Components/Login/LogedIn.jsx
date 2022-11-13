import { Box, Button, Input, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

function LogedIn(){
    const { isOpen, onToggle, onClose } = useDisclosure();
    const [login, setLogin] = useState(true);
    const [otp, setOtp] = useState("");
    const [received, setReceived] = useState("");
    let random = Math.floor(+(Math.random() * 1000));
  
    const handleOTP = () => {
      setOtp(random);
      //console.log(random);
      alert(`OTP is ${random}`);
    };
    //console.log(+received, otp);
    const handlecheck = () => {
      if (+received === otp) {
        alert("Login Sucessfull");
        onClose();
        setLogin(false);
        setOtp("");
        setReceived("");
      } else {
        alert("Enter Correct OTP");
      }
    };
    return (
      <Box>
        {login ? (
          <Button variant="link" bg="white" mr={5} onClick={onToggle}>
            Signup
          </Button>
        ) : (
          <Button
            variant="outline"
            bg="white"
            mr={5}
            onClick={() => setLogin(true)}
          >
            Logout
          </Button>
        )}
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          closeOnBlur={false}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          <PopoverContent
            style={{ marginLeft: "180%", marginTop: "10%", padding: "3rem" }}
          >
            <Text>Enter Mobile Number</Text>
            <Input placeholder="Enter Number" mt="15px" />
            <Button
              varient={"solid"}
              bg={"#84c225"}
              schema="white"
              color="white"
              width={"100%"}
              fontSize={"14px"}
              fontWeight="450"
              mb="10px"
              mt="20px"
              onClick={handleOTP}
            >
              Get OTP
            </Button>
            <Input
              placeholder="Enter OTP"
              mt="15px"
              onChange={(e) => setReceived(e.target.value)}
            />
            <Button
              varient={"solid"}
              mt="20px"
              bg={"#84c225"}
              schema="white"
              color="white"
              width={"100%"}
              fontSize={"14px"}
              fontWeight="450"
              onClick={handlecheck}
            >
              Continue
            </Button>
            <PopoverArrow />
            <PopoverCloseButton />
          </PopoverContent>
        </Popover>
      </Box>
    );
}
export default LogedIn;