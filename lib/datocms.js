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
    error({
      statusCode: 404,
      message: 'Page not found',
    })
  }

  return data.data
}
