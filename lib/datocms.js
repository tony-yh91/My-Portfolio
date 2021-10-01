import gql from 'graphql-tag'

export { default as gql } from 'graphql-tag'

export async function request({ query, variables, preview, axios, error }) {
  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`
  const { data } = await axios.post(
    endpoint,
    {
      query,
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
    error({
      statusCode: 500,
      message: 'Something went wrong in Dato CMS',
    })
  }

  return data.data
}

export const imageFields = gql`
  fragment imageFields on ResponsiveImage {
    aspectRatio
    base64
    height
    sizes
    src
    srcSet
    webpSrcSet
    width
    alt
    title
  }
`

export const seoMetaTagsFields = gql`
  fragment seoMetaTagsFields on Tag {
    attributes
    content
    tag
  }
`
