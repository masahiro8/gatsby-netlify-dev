import React from "react";

import Layout from "../components/Layout/Layout";
import BlogsRoll from '../components/BlogsRoll/BlogsRoll'
// import "./blog-page.scss";
//blog_secondトップページ
export default class BlogsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
       <div>blog 2</div>
       <p>page page page page</p>
       <h1>waaaaaaaaaaaaaaaa</h1>
       <h2>あとひとつBlogRoll的なの作る</h2>
      <h3>違うカテゴリーのブログを表示できるように</h3>
       <BlogsRoll />
      </Layout>
    );
  }
}

