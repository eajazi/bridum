import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../../assets/logo_ed.svg';
import { LinkContainer } from 'react-router-bootstrap';

class Navigationbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavbarOffseted: false,
      isExpanded: false,
      isLight: false,
      isToggled: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  /**
   * listen when screen is offseted so we can show darker navbar instead of transparent
   */
  handleScroll = e => {
    if (window.scrollY > 250) {
      this.setState({ isNavbarOffseted: true });
    } else {
      this.setState({ isNavbarOffseted: false });
    }

    if (!this.state.isExpanded) {
      this.setState({
        isLight: window.scrollY > 250
      });
    }
  };

  // handle outside click
  handleOutsideClick = e => {
    this.setState({ isExpanded: false });
    this.onToggleClick(false);
  };

  // on toggle click
  onToggleClick = expanded => {
    this.setState({ isExpanded: expanded, isToggled: expanded });

    if (!this.state.isNavbarOffseted) {
      this.setState({ isLight: expanded });
    }

    // add listener to document if enavbar is expanded
    if (expanded) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  };

  render() {
    let navClass = 'navbar';
    if (this.state.isLight) {
      navClass += ' light-bg';
    }

    let toggleClass = 'header-menu-toggle';
    if (this.state.isToggled) {
      toggleClass += ' is-toggled';
    }

    return (
      <Navbar
        ref="navbar"
        className={navClass + ' inverse'}
        collapseOnSelect="true"
        expand="lg"
        fixed="top"
        expanded={this.state.isExpanded}
        onToggle={this.onToggleClick}
      >
        <Navbar.Brand>
          <LinkContainer to="/">
            <img className="navbar-brand-logo" src={logo} />
          </LinkContainer>
        </Navbar.Brand>

        <Navbar.Toggle
          className="order-first"
          aria-controls="responsive-navbar-nav"
          children={
            <div className="header-menu-container">
              <div className={toggleClass} href="#0">
                <span className="header-menu-icon" />
              </div>
            </div>
          }
        />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer exact to="/">
              <NavItem>početna</NavItem>
            </LinkContainer>

            <LinkContainer exact to="/about">
              <NavItem>O nama</NavItem>
            </LinkContainer>

            <LinkContainer exact to="/raspored">
              <NavItem>Raspored</NavItem>
            </LinkContainer>

            <LinkContainer exact to="/kontakt">
              <NavItem>Kontakt</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigationbar;
