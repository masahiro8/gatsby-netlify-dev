import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage/PreviewCompatibleImage";
import CONTENTS_MENU from "../../constants/TEXT";
import './NewsRoll.scss'
class NewsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="news-roll__columns">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="news-roll__is-parent--column" key={post.id}>
              <article
                className={`news-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {/* {post.frontmatter.featuredimage ? (
                    <div className="news-roll__featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`
                        }}
                      />
                    </div>
                  ) : null} */}
                  <p className="news-roll__post-meta">
                    <Link className="news-roll__title" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="news-roll__subtitle">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                {/* <p className="news-roll__post-excerpt">
                  {post.excerpt}
                  <br />
                  <br /> */}
                  <Link className="news-roll__button" to={post.fields.slug}>
                    {CONTENTS_MENU.KEEP_READING.texts.ja}
                  </Link>
                {/* </p> */}
              </article>
            </div>
          ))}
      </div>
    );
  }
}

NewsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query NewsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "news-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "YYYY年 MM月 DD日")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <NewsRoll data={data} count={count} />}
  />
);
