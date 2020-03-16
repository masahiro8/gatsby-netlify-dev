import React from "react";

import Layout from "../../components/Layout/Layout";
import BlogsRoll from '../../components/BlogsRoll/BlogsRoll'
import BlogRoll from '../../components/BlogRoll/BlogRoll'
// import "./blog-page.scss";
// blog2トップページ
export default class BlogsIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>BLOG2</h1>
        <section>
          <div className="content">
            <BlogsRoll />
          </div>
        </section>
      </React.Fragment>
    )
  }
}

