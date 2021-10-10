const handler = (payload) => {
  try {
    const { baseUrl } = JSON.parse(payload.body)
    const authURL = new URL('https://accounts.spotify.com/authorize')
    authURL.searchParams.append('client_id', process.env.SPOTIFY_CLIENT_ID)
    authURL.searchParams.append('response_type', 'code')
    authURL.searchParams.append('redirect_uri', `${baseUrl}/.netlify/functions/SpotifyCallback`)
    authURL.searchParams.append('scope', 'user-read-playback-state')
    console.log(baseUrl)
    return { statusCode: 200, body: JSON.stringify({ generatedURL: authURL.href }) }
  } catch (error) {
    return {
      statusCode: 400,
      body: 'Cannot generate spotify auth url',
    }
  }
}

module.exports = { handler }
