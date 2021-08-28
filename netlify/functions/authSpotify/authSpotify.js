const axios = require('axios')

const authSpotify = async () => {
  try {
    const url = 'https://accounts.spotify.com/authorize'
    await axios.get(url, {
      params: {
        client_id: process.env.SPOTIFY_CLIENT_ID,
        response_typ: 'code',
        redirect_uri: 'https://yehtetaung.netlify.app/.netlify/functions/authCallback',
        scope: 'user-read-currently-playing',
      },
    })
    return {
      statusCode: 200,
      body: 'Authorize request sent!',
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: error,
    }
  }
}

module.exports = { authSpotify }
