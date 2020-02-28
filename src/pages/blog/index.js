import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import './blog-page.scss'
//blogトップページ
export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="blog-page__image"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
        <h1 className="blog-page__title">
            Latest Stories
          </h1>
        </div>
        <section className="blog-page__section">
          <div className="blog-page__container">
            <div className="blog-page__content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
