import React from "react";
import { BsGithub, BsLinkedin, BsCodeSlash } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

const Navibar = () => {
  return (
    <>
      <Navbar isBordered variant={"sticky"}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn={"xs"}>
            <MdOutlineInventory/>
             InventoryDemo
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn={"xs"}>
          <Navbar.Link href="https://github.com/higashi04">
            <BsGithub /> GitHub
          </Navbar.Link>
          <Navbar.Link href="https://www.linkedin.com/in/cesar-higashi-8638b317b/">
            <BsLinkedin/> Linkedin
          </Navbar.Link>
          <Navbar.Link href="https://www.cesarhigashi.com">
            <BsCodeSlash/> Personal Site
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </>
  );
};
export default Navibar;
