import React, { Component, Fragment } from 'react';

import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Fragment>
        <Navbar
          expand="md"
          style={{
            backgroundColor: '#333',
            borderColor: '#FFF',
            color: 'white'
          }}
        >
          <NavbarBrand to="/">Alkhadra</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" activeClassName="active" tag={RRNavLink} exact>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/about"
                  activeClassName="active"
                  tag={RRNavLink}
                  exact
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/project"
                  activeClassName="active"
                  tag={RRNavLink}
                  exact
                >
                  Project
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact"
                  activeClassName="active"
                  tag={RRNavLink}
                  exact
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
export default Header;
