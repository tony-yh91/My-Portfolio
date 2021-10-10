const handler = () => {
  try {
    const authURL = new URL('https://accounts.spotify.com/authorize')
    authURL.searchParams.append('client_id', process.env.SPOTIFY_CLIENT_ID)
    authURL.searchParams.append('response_type', 'code')
    authURL.searchParams.append(
      'redirect_uri',
      `https://yehtetaung.netlify.app/.netlify/functions/SpotifyCallback`
    )
    authURL.searchParams.append('scope', 'user-read-playback-state')
    return { statusCode: 200, body: authURL.href }
  } catch (error) {
    return {
      statusCode: 400,
      body: 'Cannot generate spotify auth url',
    }
  }
}

module.exports = { handler }
