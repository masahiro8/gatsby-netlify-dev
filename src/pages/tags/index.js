import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import {  Link,graphql, StaticQuery } from 'gatsby'
import './tags.scss'
// import PropTypes from "prop-types"

//tagspagetop
const TagsPage =({  data: {
  allMarkdownRemark: { group },
  site: {
    siteMetadata: { title },
  },
},
}) =>(
  <div className='tags_container'>
  <p className='tags_title'>Tags</p>
    <Helmet title={`Tags | ${title}`} />
    <ul className="tags_taglist">
      {group.map(tag => (
      <li className='tags_tags' key={tag.fieldValue}>
        <Link classname='tags_tag' to={`/tags/${kebabCase(tag.fieldValue)}/`}>
          {tag.fieldValue} ({tag.totalCount})
        </Link>
      </li>
       ))}
    </ul>
  </div>
  
)


export default () => (
  <StaticQuery 
  query = {graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
     allMarkdownRemark(limit: 1000) {
       group(field: frontmatter___tags) {
        fieldValue
       totalCount
         }
       }
  }
    `}
    
    render={data => <TagsPage data={data}  />}
  />
)

