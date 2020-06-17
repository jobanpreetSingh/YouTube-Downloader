import React from "react";

import { Navbar } from "react-bootstrap";
//import { Link} from 'react-router'
import {Redirect,Route,Link} from 'react-router-dom'
import Home from './SearchBarwithShowVDS'

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <h3 className="fix">YouT-Downloader</h3>
        </Navbar.Brand>

        <Navbar.Brand>
          {/* <Link to="/" className="fix">
            Home
          </Link> */}
  
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};
export default Menu;
