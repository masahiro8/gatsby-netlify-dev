import React from "react";
import NewsRoll from '../../components/NewsRoll/NewsRoll'
import Layout from "../../components/Layout/Layout";
import './news-page.scss'
//newトップページ
export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="news-page__image">
          <h1 className="news-page__title">news topic</h1>
        </div>
        <section className="news-page__section">
          <div className="news-page__container">
            <div className="news-page__content">
          <NewsRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
