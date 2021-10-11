const axios = require('axios')
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY)

exports.handler = async (payload) => {
  try {
    const { code } = payload.queryStringParameters
    if (!code) {
      return {
        statusCode: 400,
        body: 'no code',
      }
    }
    const url = '	https://accounts.spotify.com/api/token'
    const base64 = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString('base64')
    const params = new URLSearchParams()
    params.append('grant_type', 'authorization_code')
    params.append('code', code)
    params.append('redirect_uri', `${process.env.NETLIFY_FUNCTION_URL}/SpotifyCallback`)
    const config = {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64}`,
      },
    }
    const response = await axios.post(url, params, config)
    // Insert to supabase
    await supabase.from('Auth').insert([
      { name: 'Spotify', type: 'access_token', value: response.data.access_token },
      { name: 'Spotify', type: 'refresh_token', value: response.data.refresh_token },
    ])
    return {
      statusCode: 200,
    }
  } catch (error) {
    console.error('error', error)
    const errorObj = {
      statusCode: error.response ? error.response.statusCode : 500,
      body: error.response ? error.response.statusText : error.message,
    }
    return errorObj
  }
}
