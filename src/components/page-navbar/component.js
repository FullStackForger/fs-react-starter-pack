import React from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
				<LinkContainer to='/home'>
					<NavItem eventKey={1} href="#">Home</NavItem>
				</LinkContainer>
				<LinkContainer to='/info'>
					<NavItem eventKey={2} href="#">Info</NavItem>
				</LinkContainer>
      </Nav>
			<Nav pullRight>
				<LinkContainer to='/login'>
					<NavItem eventKey={5} href="#">Login</NavItem>
				</LinkContainer>
				<LinkContainer to='/signup'>
					<NavItem eventKey={6} href="#">Signup</NavItem>
				</LinkContainer>

				<NavDropdown eventKey={7} title="Dropdown" id="basic-nav-dropdown">
					<LinkContainer to='/account'>
						<MenuItem eventKey={7.1}>Account</MenuItem>
					</LinkContainer>
					<MenuItem divider />
					<LinkContainer to='/logout'>
						<MenuItem eventKey={7.2}>Logout</MenuItem>
					</LinkContainer>

        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default PageNavBar