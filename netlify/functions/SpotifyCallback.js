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
    params.append(
      'redirect_uri',
      `https://yehtetaung-56243f.netlify.live/.netlify/functions/SpotifyCallback`
    )
    const config = {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64}`,
      },
    }
    const response = await axios.post(url, params, config)
    if (response.status !== 200) {
      throw new Error('error getting current track')
    }
    console.log(response.data)
    // Insert to supabase
    const { data, error } = await supabase.from('Auth').insert([
      { name: 'Spotify', type: 'access_token', value: response.data.access_token },
      { name: 'Spotify', type: 'refresh_token', value: response.data.refresh_token },
    ])
    if (error) {
      return {
        statusCode: 400,
        body: 'Cannot save to supabase',
      }
    }
    if (data) {
      return {
        statusCode: 200,
      }
    }
  } catch (error) {
    return {
      statusCode: 400,
      body: 'Spotify callback error',
    }
  }
}
