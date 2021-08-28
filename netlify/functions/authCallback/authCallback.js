const axios = require('axios')

const callbackHandler = async (payload) => {
  try {
    if (payload.error) {
      throw new Error('Spotify auth error')
    }
    const { code } = payload
    if (code) {
      const url = 'https://accounts.spotify.com/api/token'
      const response = await axios.post(url, {
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'https://yehtetaung.netlify.app/.netlify/functions/authCallback',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      })
      const result = response.json()
      console.log('token', result)
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: error,
    }
  }
}

module.exports = { callbackHandler }
