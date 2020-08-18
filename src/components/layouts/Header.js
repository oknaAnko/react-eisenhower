import React from "react";
import "../../styles/Header.css";
import { Button, Navbar } from "@blueprintjs/core";

const Header = () => {
  return (
    <div>
      <Navbar>
        <div className="wrapper">
          <Navbar.Group>
            <Navbar.Heading>Do it with Eisenhower</Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align="right">
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="log-in" text="Login" />
          </Navbar.Group>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
