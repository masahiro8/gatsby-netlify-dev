import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout/Layout";
import Content, { HTMLContent } from "../../components/Content/Content";
// import "./blogs-post.scss";

export const BlogsPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="blogs-post__section">
      {helmet || ""}
      <div className="blogs-post__container-content">
        <div className="blogs-post__columns">
          <div className="blogs-post__column">
            <h1 className="blogs-post__title">{title}</h1>
            <p className="blogs-post__description">{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div className="blogs-post__tags-container">
                <h4 className="blogs-post__tags">Tags</h4>
                <ul className="blogs-post__taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogsPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

BlogsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogsPost;

export const pageQuery = graphql`
  query blogPostByIdAndBlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
