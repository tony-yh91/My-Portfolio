const handler = () => {
  try {
    const authURL = new URL('https://accounts.spotify.com/authorize')
    authURL.searchParams.append('client_id', '482c166baa1d4829b71f3842da7e8fb5')
    authURL.searchParams.append('response_type', 'code')
    authURL.searchParams.append(
      'redirect_uri',
      `${process.env.BASE_URL}/.netlify/functions/SpotifyCallback`
    )
    authURL.searchParams.append('scope', 'user-read-recently-played')
    return { statusCode: 200, body: authURL.href }
  } catch (error) {
    return {
      statusCode: 400,
      body: 'Cannot generate spotify auth url',
    }
  }
}

module.exports = { handler }
