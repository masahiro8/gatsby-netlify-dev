import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../PreviewCompatibleImage/PreviewCompatibleImage";
// import "./BlogRoll.scss";
import CONTENTS_MENU from "../../constants/TEXT";

class BlogsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="blogs-roll__columns">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="blogs-roll__is-parent--column" key={post.id}>
              <article
                className={`blogs-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="blogs-roll__featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="blogs-roll__post-meta">
                    <Link className="blogs-roll__title" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="blogs-roll__subtitle">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                  <Link className="blogs-roll__button" to={post.fields.slug}>
                    {CONTENTS_MENU.KEEP_READING.texts.ja}
                  </Link>
              </article>
            </div>
          ))}
      </div>
    );
  }
}

BlogsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blogs-post" } } }
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
    render={(data, count) => <BlogsRoll data={data} count={count} />}
  />
);
