import React from "react";
import { BsGithub, BsLinkedin, BsCodeSlash } from "react-icons/bs";
import { MdOutlineInventory } from "react-icons/md";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import { Link as Routelink }  from "react-router-dom";
import "./Navibar.css"

const Navibar = () => {
  const collapseItems = [
    {
      id: 1,
      text: (
        <>
           <BsGithub />  GitHub
        </>
      ),
      link: "https://github.com/higashi04"
    },
    {
      id: 2,
      text: (
        <>
           <BsLinkedin/> Linkedin
        </>
      ),
      link: "https://www.linkedin.com/in/cesar-higashi-8638b317b/"
    },
    {
      id: 3,
      text: (
        <>
           <BsCodeSlash/> Portfolio
        </>
      ),
      link:"https://www.cesarhigashi.com"
    },
  ]
  return (
    <>
      <Navbar isBordered variant={"sticky"}>
        <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" showIn={"sm"}/>
          <Text b color="inherit">
            <Routelink className="brandLink" to="/">
            <MdOutlineInventory/>
             InventoryDemo
            </Routelink>
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn={"xs"}>
          <Navbar.Link href="https://github.com/higashi04">
            <BsGithub /> GitHub
          </Navbar.Link>
          <Navbar.Link href="https://www.linkedin.com/in/cesar-higashi-8638b317b/">
            <BsLinkedin/> Linkedin
          </Navbar.Link>
          <Navbar.Link href="https://www.cesarhigashi.com">
            <BsCodeSlash/> Portfolio
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="/register">
              Register User
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map(listItem => (
            <Navbar.CollapseItem key={listItem.id}>
              <Link color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={listItem.link}>
                {listItem.text}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navibar;
