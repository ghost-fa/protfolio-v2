import React, { Fragment } from 'react';

import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = () => {
  return (
    <Fragment>
      <Nav pills>
        <NavItem>
          <NavLink to="/" activeClassName="active" tag={RRNavLink} exact>
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/about" activeClassName="active" tag={RRNavLink} exact>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/project" activeClassName="active" tag={RRNavLink} exact>
            Project
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" activeClassName="active" tag={RRNavLink} exact>
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Fragment>
  );
};

export default Header;
