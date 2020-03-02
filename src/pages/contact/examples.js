import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'
import './contact_examples.scss'
import CONTENTS_MENU from '../../constants/TEXT';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="contact-examples_section">
          <div className="contact-examples_container">
            <div className="contact-examples_content">
              <div className="contact-examples_subcontainer">
              <h1 className='contact-examples_title'>Hi people</h1>
              <p className='contact-examples_content'> 
                This is an example site integrating Netlify’s form handling with
                Gatsby
              </p>
              </div>
              <div className="contact-examples_subcontainer">
              <ul className='contact-examples_items'>
                <li className='contact-examples_item'>
                <Link className="contact-examples_item--navbar-item" to={`/${CONTENTS_MENU.CONTACT.path}`}>
                      ・{ CONTENTS_MENU.CONTACT.texts.en }
                </Link>
                </li>
                <li className='contact-examples_item'>
                <Link className="ncontact-examples_item--navbar-item" to={`/${CONTENTS_MENU.CONTACT_FILEUPLOAD.path}`}>
                      ・{ CONTENTS_MENU.CONTACT_FILEUPLOAD.texts.en }
                </Link>                
                </li>
              </ul>
              </div>

              <div className="contact-examples_subcontainer">
              <h2 className='contact-examples_subtitle'>Troubleshooting</h2>
              </div>

              <div className="contact-examples_subcontainer">
              <h2 className='contact-examples_subtitle'>Forms stop working after upgrading to Gatsby v2</h2>
              <p className='contact-examples_content'>
                This can be caused by the offline-plugin.{' '}
                <a href="https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232">
                  Workaround
                </a>{' '}
                is to use <code>?no-cache=1</code> in the POST url to prevent
                the service worker from handling form submissions
              </p>
              </div>

              <div className="contact-examples_subcontainer">
              <h2 className='contact-examples_subtitle'>Adding reCAPTCHA</h2>
              <p className='contact-examples_content'>
                If you are planning to add reCAPTCHA please go to{' '}
                <a href="https://github.com/imorente/gatsby-netlify-form-example">
                  imorente/gatsby-netlify-form-example
                </a>{' '}
                for a working example.
              </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
