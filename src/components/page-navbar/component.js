import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { FormGroup, FormControl, Button } from 'react-bootstrap'

const PageNavBar = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Brand</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
				<NavItem eventKey={1} href="#">Home</NavItem>
        <NavItem eventKey={2} href="#">Info</NavItem>
      </Nav>
			<Nav pullRight>
				<NavItem eventKey={5} href="#">Login</NavItem>
				<NavItem eventKey={6} href="#">Signup</NavItem>

 				<NavDropdown eventKey={7} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={7.1}>Profile</MenuItem>
					<MenuItem eventKey={7.3}>Account</MenuItem>
					<MenuItem divider />
          <MenuItem eventKey={7.2}>Logout</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default PageNavBar