import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import './contactForm.scss'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="contactform"> 
          <div className="contactform__bar">  
            <div className="contactform__content">  
              <h1 className='contactform__title'>Contact</h1>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="contactform__field">  
                  <label className="contactform__label" htmlFor={'name'}>  
                    Your name
                  </label>
                  <div className="contactform__control">  
                    <input
                      className="contactform__input"  
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="contactform__field">   
                  <label className="contactform__label" htmlFor={'email'}>  
                    Email
                  </label>
                  <div className="contactform__control">  
                    <input
                      className="contactform__input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="contactform__field">    
                  <label className="contactform__label" htmlFor={'message'}>    {/* label */}
                    Message
                  </label>
                  <div className="contactform__control">   
                    <textarea
                      className="contactform__textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="contactform__field">  
                  <button className="contactform__button" type="submit">  {/* button is-link */}
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
