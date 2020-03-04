import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import './Testimonials.scss'

const Testimonials = ({ testimonials }) => (
  <div className='testimonials__content'>
    {testimonials.map(testimonial => (
      <article key={v4()} className="testimonials__message">
        <div className="testimonials__message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
