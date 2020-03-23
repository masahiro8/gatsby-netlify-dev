import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import {  Link,graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/Layout/Layout'
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





// const TagsPage = ({
//   data: {
//     allMarkdownRemark: { group },
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }) => (
//   <Layout>
//     <section className="section">
//       <Helmet title={`Tags | ${title}`} />
//       <h1>tagsページトップ</h1>
//       <div className="container content">
//         <div className="columns">
//           <div
//             className="column is-10 is-offset-1"
//             style={{ marginBottom: '6rem' }}
//           >
//             <h1 className="title is-size-2 is-bold-light">Tags</h1>
//             <ul className="taglist">
//               {group.map(tag => (
//                 <li key={tag.fieldValue}>
//                   <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//                     {tag.fieldValue} ({tag.totalCount})
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   </Layout>
// )

// export default TagsPage

// export const tagPageQuery = graphql`
//   query TagsQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(limit: 1000) {
//       group(field: frontmatter___tags) {
//         fieldValue
//         totalCount
//       }
//     }
//   }
// `
