import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import './index.scss'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div className='home-page__content'>
    <div
      className="home-page__full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div className='home-page__topimage-title-container'>
        <h1 className="home-page__topimage-main-title" >
          {title}
        </h1>
        <h3 className="home-page__topimage-sub-title" >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="home-page__section--container">
      <div className="home-page__container">
        <div className="home-page__section">
          <div className="home-page__columns">
            <div className="home-page__column">
              <div className="home-page__content">
                <div className="home-page__main-content">
                  <div className="home-page__main-title-continer">
                    <h1 className="home-page__main-title">{mainpitch.title}</h1>
                  </div>
                  <div className="home-page__tile">
                    <h3 className="home-page__subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="home-page__columns">
                  <div className="home-page__column">
                    <h3 className="home-page__heading">
                      {heading}
                    </h3>
                    <p className="home-page__description">{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="home-page__columns-product">
                  <div className="home-page__column-product-btn">
                    <Link className="home-page__product-btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="home-page__column-blog">
                  <h3 className="home-page__column-blog-title">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="home-page__column-readmore">
                    <Link className="home-page__column-readmore-btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`

