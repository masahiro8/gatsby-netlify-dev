import React from "react";

import Layout from "../../components/Layout/Layout";
import BlogRoll from "../../components/BlogRoll/BlogRoll";
// import "./blog-page.scss";
//newsトップページ
export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="news-page__image">
          <h1 className="news-page__title">Latest News</h1>
        </div>
        <section className="news-page__section">
          <div className="news-page__container">
            <div className="news-page__content">
          <div>news pageを作ります</div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
