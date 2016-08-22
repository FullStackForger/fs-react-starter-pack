import React, {PropTypes} from 'react'
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class PageNavBar extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
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
					{(() => { if (!this.props.authenticated) { return (
						<Nav pullRight>
							<LinkContainer to='/login'>
								<NavItem eventKey={5} href="#">Login</NavItem>
							</LinkContainer>
							<LinkContainer to='/signup'>
								<NavItem eventKey={6} href="#">Signup</NavItem>
							</LinkContainer>
						</Nav>
					)} else { return (
						<Nav pullRight>
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
					)}
				})()}
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

PageNavBar.propTypes = {
	authenticated: PropTypes.bool.required
}

export default PageNavBar