import React from 'react'
import PropTypes from 'prop-types'
import './Pricing.scss'

const Pricing = ({ data }) => (
  <div className="pricing__columns">
    {data.map(price => (
      <div key={price.plan} className="pricing__column">
        <section className="pricing__section">
          <h4 className="pricing__price--plan">  {/* is-size-5 */}
            {price.plan}
          </h4>
          <h2 className="pricing__price"> {/* is-size-1 has-text-weight-bold has-text-primary has-text-centered */}
            ${price.price}
          </h2>
          <p className="pricing__price--description">{price.description}</p>  {/* has-text-weight-semibold */}
          <ul>
            {price.items.map(item => (
              <li key={item} className="pricing__price--item">  {/* is-size-5 */}
                ・{item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
