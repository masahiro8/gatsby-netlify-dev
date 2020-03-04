import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout/Layout'
import Content, { HTMLContent } from '../../components/Content/Content'
import './about-page.scss'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="about-page__section">  {/* section--gradient */}
      <div className="about-page__container">
        <div className="about-page__columns">
          <div className="about-page__column">  {/* is-10 is-offset-1 */}
            <div className="about-page__section">
              {/* is-size-3 has-text-weight-bold is-bold-light */}
              <h2 className="about-page__title"> 
                {title}
              </h2>
              <PageContent className="about-page__content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
