import React from "react";
import { Link } from "react-router-dom";

import { Navbar } from "@blueprintjs/core";
import "../../styles/Header.css";

const Header = () => {
  return (
    <div>
      <Navbar>
        <div className="view-width">
          <Navbar.Group>
            <Navbar.Heading>Do it with Eisenhower</Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align="right">
            <Navbar.Divider />
            <Link to="/home" className="bp3-button bp3-minimal">
              <span icon="home" className="bp3-icon bp3-icon-home">
                <svg
                  data-icon="home"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <desc>home</desc>
                  <path
                    d="M2 10v5c0 .55.45 1 1 1h3v-5h4v5h3c.55 0 1-.45 1-1v-5L8 4l-6 6zm13.71-2.71L14 5.59V2c0-.55-.45-1-1-1s-1 .45-1 1v1.59L8.71.29C8.53.11 8.28 0 8 0s-.53.11-.71.29l-7 7a1.003 1.003 0 001.42 1.42L8 2.41l6.29 6.29c.18.19.43.3.71.3a1.003 1.003 0 00.71-1.71z"
                  ></path>
                </svg>
              </span>
              <span className="bp3-button-text">Home</span>
            </Link>
            <Link to="/login" className="bp3-button bp3-minimal">
              <span icon="log-in" className="bp3-icon bp3-icon-log-in">
                <svg
                  data-icon="log-in"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <desc>log-in</desc>
                  <path
                    d="M11 8c0-.28-.11-.53-.29-.71l-3-3a1.003 1.003 0 00-1.42 1.42L7.59 7H1c-.55 0-1 .45-1 1s.45 1 1 1h6.59L6.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l3-3c.18-.18.29-.43.29-.71zm4-8H9c-.55 0-1 .45-1 1s.45 1 1 1h5v12H9c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </span>
              <span className="bp3-button-text">Login</span>
            </Link>
          </Navbar.Group>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
