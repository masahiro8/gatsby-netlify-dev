import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import {  Link,graphql, StaticQuery } from 'gatsby'
import Layout from '../../components/Layout/Layout'
// import PropTypes from "prop-types"

//tagspagetop


const TagsPage =({data}) =>(
  <div>
    <p>TAG TOP PAGE DAYO</p>
    <h1>{data.site.siteMetadata.title}</h1>
    <h1>{data.site.siteMetadata.description}</h1>

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




// const TagsPage = ({data}) =>(
//   <div>
//     <p>TAGS TOP PAGE </p>
//       <h1>{data.site.siteMetadata.title}</h1>
//       <h2>{data.site.siteMetadata.description}</h2>
//       {/* <p>{data.allMarkdownRemark.group}</p> */}
//           {/* <ul className="taglist">
//              {group.map(tag => (
//                <li key={tag.fieldValue}>
//                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
//                    {tag.fieldValue} ({tag.totalCount})
//                  </Link>
//                </li>
//              ))}
//           </ul> */}
//   </div>
// )

// export const props = (
//   <StaticQuery 
//   query = {graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//     allMarkdownRemark(limit: 1000) {
//        group(field: frontmatter___tags) {
//          fieldValue
//          totalCount
//        }
//      }
//   }
// `}
// render={data => ( <TagsPage data={data} {...props} />)}
//   />
// );

//propsはコンポーネント作成時に値を指定することで
//コンポーネントで表示させたいデータを指定できます

// TagsPage.propstypes = {
//   data:PropTypes.shape({
//     site:PropTypes.shape({
//       siteMetadata:PropTypes.shape({
//         title:PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// }



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
