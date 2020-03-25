import React from 'react'
import { Link } from 'gatsby'

import logo from '../../img/logo.svg'  
import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'
import twitter from '../../img/social/twitter.svg'
import vimeo from '../../img/social/vimeo.svg'

import CONTENTS_MENU from '../../constants/TEXT'
import './Footer.scss'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer__main-container">
        <div className="footer__image-content">
          <img
            className='footer__image-kaldi'
            src={logo}
            alt="Kaldi"
          />
        </div>
        <div className="footer__content">
          <div className="footer__container">
            <div className="footer__columns">
              <div className="footer__column">
                <section className="footer__menu">
                  <ul className="footer__menu-list">
                    <li>
                      <Link  className="footer__navbar-item" to={`/${CONTENTS_MENU.HOME.path}`} >
                      { CONTENTS_MENU.HOME.texts.ja }
                      </Link>
                    </li>
                    <li>
                      <Link className="footer__navbar-item" to={`/${CONTENTS_MENU.ABOUT.path}`}>
                      { CONTENTS_MENU.ABOUT.texts.ja }
                      </Link>
                    </li>
                    <li>
                      <Link className="footer__navbar-item" to={`/${CONTENTS_MENU.PRODUCTS.path}`}>
                      { CONTENTS_MENU.PRODUCTS.texts.ja }
                      </Link>
                    </li>
                    <li>
                      <Link className="footer__navbar-item" to={`/${CONTENTS_MENU.CONTACT_EXAMPLES.path}`}>
                       { CONTENTS_MENU.CONTACT_EXAMPLES.texts.ja }
                      </Link>
                    </li>
                    <li>
                      <a
                        className="footer__navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="footer__sub-column">
                <section>
                  <ul className="footer__sub-menu-list">
                    <li className='footer__sub-menu-item'>
                      <Link className="footer__sub-navbar-item" to={`/${CONTENTS_MENU.BLOG.path}`}>
                      { CONTENTS_MENU.BLOG.texts.ja2 }
                      </Link>
                    </li>
                    <li className='footer__sub-menu-item'>
                      <Link className="footer__sub-navbar-item" to={`/${CONTENTS_MENU.NEWS.path}`}>
                      { CONTENTS_MENU.NEWS.texts.ja }
                      </Link>
                    </li>
                    <li className='footer__sub-menu-item'>
                      <Link className="footer__sub-navbar-item" to={`/${CONTENTS_MENU.CONTACT.path}`}>
                      { CONTENTS_MENU.CONTACT.texts.ja }
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="footer__sns-column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                  className="footer__sns-facebook"
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="footer__sns-twitter"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                  className="footer__sns-instagram"
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                  className="footer__sns-vimeo"
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
