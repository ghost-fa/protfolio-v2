import React, { Fragment } from 'react';

import { NavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink as BsLink } from 'reactstrap';

const Header = () => {
  return (
    <Fragment>
      <Nav pills>
        <NavItem>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/about" activeClassName="active" exact>
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/project" activeClassName="active" exact>
            Project
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" activeClassName="active" exact>
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </Fragment>
  );
};

export default Header;
