const axios = require('axios')
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY)

exports.handler = async () => {
  try {
    // get refresh token from supabase
    const { data } = await supabase
      .from('Auth')
      .select('value')
      .filter('name', 'eq', 'Spotify')
      .filter('type', 'eq', 'refresh_token')
    const refreshToken = data[0].value
    // fetch refresh token
    const url = 'https://accounts.spotify.com/api/token'
    const base64 = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
    ).toString('base64')
    const params = new URLSearchParams()
    params.append('grant_type', 'refresh_token')
    params.append('refresh_token', refreshToken)
    const config = {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64}`,
      },
    }
    const response = await axios.post(url, params, config)
    // Update to supabase
    await supabase
      .from('Auth')
      .upsert([{ id: 1, name: 'Spotify', type: 'access_token', value: response.data.access_token }])
    return { statusCode: 200 }
  } catch (error) {
    console.error('error', error)
    const errorObj = {
      statusCode: error.response ? error.response.statusCode : 500,
      body: error.response ? error.response.statusText : error.message,
    }
    return errorObj
  }
}
