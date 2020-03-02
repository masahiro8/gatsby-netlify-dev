import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

import CONTENTS_MENU from "../../constants/TEXT";
import "./Navbar.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <div className="navbar__content">
        <nav className="navbar" role="navigation" aria-label="main-navigation">
          <div className="navbar__container">
            <div className="navbar__navbar-brand">
              <Link to="/" className="navbar__navbar-item" title="Logo">
                <img src={logo} alt="Kaldi" />
              </Link>
              {/* Hamburger menu */}
              <div className="navbar__navmenue-container">
                <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className={`navbar-menu ${this.state.navBarActiveClass}`}>
              <div className="navbar__navMenu">
                <div className="navbar__navbar-start">
                  <Link
                    className="navbar__navbar-item"
                    to={`/${CONTENTS_MENU.ABOUT.path}`}
                  >
                    {CONTENTS_MENU.ABOUT.texts.ja}
                  </Link>
                  <Link
                    className="navbar__navbar-item"
                    to={`/${CONTENTS_MENU.PRODUCTS.path}`}
                  >
                    {CONTENTS_MENU.PRODUCTS.texts.ja}
                  </Link>
                  <Link
                    className="navbar__navbar-item"
                    to={`/${CONTENTS_MENU.BLOG.path}`}
                  >
                    {CONTENTS_MENU.BLOG.texts.ja}
                  </Link>
                  <Link
                    className="navbar__navbar-item"
                    to={`/${CONTENTS_MENU.CONTACT.path}`}
                  >
                    {CONTENTS_MENU.CONTACT.texts.ja}
                  </Link>
                  <Link
                    className="navbar__navbar-item"
                    to={`/${CONTENTS_MENU.CONTACT_EXAMPLES.path}`}
                  >
                    {CONTENTS_MENU.CONTACT_EXAMPLES.texts.ja}
                  </Link>
                  <a
                    className="navbar__navbar-item"
                    href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      alt="Github"
                      className="navbar__navbar-image-github"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
