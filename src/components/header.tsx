import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const Header = ({ siteTitle }) => (
<Navbar bg="light" expand="xl" sticky="top">
</Navbar>
)
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
