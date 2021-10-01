const axios = require('axios')
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(process.env.SUPAHOST_URL, process.env.SUPABASE_SECRET_KEY)

exports.handler = async () => {
  try {
    // get refresh token from supabase
    const { data, error } = await supabase
      .from('Auth')
      .select('value')
      .filter('name', 'eq', 'Spotify')
      .filter('type', 'eq', 'refresh_token')
    if (error) {
      return {
        statusCode: 400,
        body: 'Cannot get token from supabase',
      }
    }
    console.log('data', data)
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
    if (response.status !== 200) {
      return {
        statusCode: response.status,
        body: response.statusText,
      }
    }
    // Update to supabase
    const { data: updatedData, error: updateError } = await supabase
      .from('Auth')
      .upsert([{ id: 1, name: 'Spotify', type: 'access_token', value: response.data.access_token }])
    if (updateError) {
      return {
        statusCode: 400,
        body: 'Cannot update to supabase',
      }
    }
    if (updatedData) {
      return {
        statusCode: 200,
      }
    }
  } catch (error) {
    // console.log(error)
    return {
      statusCode: error.response.status,
      body: error.response.statusText,
    }
  }
}
