import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/logo-natura.png"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ setTitle }) => (
  <header>
    <Navbar className="navbar" expand="lg" fixed="top">
      <Navbar.Brand className="px-5">
        <Link to="/">
          <img src={Logo} alt="Logo_Natura" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="text-center ml-auto px-5">
          <Nav.Link>
            <Link to="/">Inicio</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">Acerca</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/benefits">Beneficios</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">¡Quiero Ser Consultor!</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
