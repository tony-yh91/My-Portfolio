import gql from 'graphql-tag'
import axios from 'axios'

export { default as gql } from 'graphql-tag'

export async function request({ query, variables }) {
  const endpoint = `https://graphql.datocms.com/`
  const { data } = await axios.post(
    endpoint,
    {
      query: query.loc && query.loc.source.body,
      variables,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.DATO_CMS_TOKEN}`,
      },
    }
  )

  if (data.errors) {
    console.log(data.errors)
    // error({
    //   statusCode: 500,
    //   message: 'Something went wrong in Dato CMS',
    // })
  }

  return data.data
}

export const imageFields = gql`
  fragment imageFields on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`

export const seoMetaTagsFields = gql`
  fragment seoMetaTagsFields on Tag {
    attributes
    content
    tag
  }
`
