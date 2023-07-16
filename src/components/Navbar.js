import { useState } from "react";
import {
    Box,
    Flex,
    Button,
    IconButton,
    Text,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';


const Navbar = ({ t }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Box bg="gray.800" px={{ base: 2, md: 4 }} py={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <IconButton
                    size={"md"}
                    icon={<HamburgerIcon />}
                    aria-label={"Open Menu"}
                    display={{ md: "none" }}
                    onClick={toggle}
                />
                <Box display={{ base: "none", md: "flex" }} alignItems={"center"}>
                    <Text fontSize="lg" fontWeight="bold" color="white">
                        {t("Find Your's")}
                    </Text>
                    <Box ml={10}>
                        <Button variant="link" color="white" mr={4}>
                            {t("Home")}
                        </Button>
                        <Button variant="link" color="white" mr={4}>
                            {t("About")}
                        </Button>
                        <Button variant="link" color="white" mr={4}>
                            {t("Contact Us")}
                        </Button>
                    </Box>
                </Box>
                <Box
                    display={{ base: "none", sm: "flex", md: "flex" }}
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                >

                      <Button
                            colorScheme="blue"
                            variant="solid"
                            size="sm"
                            mr={4}
                            px={4}
                            py={2}
                            onClick={() => {
                            navigate('/getrequest')
                        }}
                        >
                            {"Requests"}
                        </Button>
                    <Button
                        colorScheme="blue"
                        variant="solid"
                        size="sm"
                        mr={4}
                        px={4}
                        py={2}
                        onClick={() => {
                            navigate('/post')
                        }}
                    >
                        {t("ClickHereToPostNewJob")}
                    </Button>

                    <Menu>
                        <MenuButton
                            as={Button}
                            rounded={"full"}
                            variant={"link"}
                            cursor={"pointer"}
                            minW={0}
                        >
                            <Avatar
                                size={"sm"}
                                name="User"
                            />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>{t("View Profile")}</MenuItem>
                            <MenuItem>{t("Logout")}</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
            {isOpen ? (
                <Box pb={4}>
                    <Button variant="link" color="white" mb={4} w="full">
                        {t("Home")}
                    </Button>
                    <Button variant="link" color="white" mb={4} w="full">
                        {t("About")}
                    </Button>
                    <Button variant="link" color="white" mb={4} w="full">
                        {t("Contact Us")}
                    </Button>
                    <Box
                        display={{ base: "flex", sm: "none", md: "none" }}
                        alignItems={"center"}
                        justifyContent={"flex-end"}
                    >
                     <Button
                            colorScheme="blue"
                            variant="solid"
                            size="sm"
                            mr={4}
                            px={4}
                            py={2}
                            onClick={() => {
                            navigate('/getrequest')
                        }}
                        >
                            {"Requests"}
                        </Button>
                    <Button
                        colorScheme="blue"
                        variant="solid"
                        size="sm"
                        mr={4}
                        px={4}
                        py={2}
                        onClick={() => {
                            navigate('/post')
                        }}
                    >
                        {t("ClickHereToPostNewJob")}
                    </Button>

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar
                                    size={"sm"}
                                    name="User"
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>{t("View Profile")}</MenuItem>
                                <MenuItem>{t("Logout")}</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            ) : null}
        </Box>
    );
};

export default Navbar;
