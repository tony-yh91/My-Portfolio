const axios = require('axios')
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY)

exports.handler = async () => {
  try {
    // get access_token form supabase
    const { data, error } = await supabase
      .from('Auth')
      .select('value')
      .filter('name', 'eq', 'Spotify')
      .filter('type', 'eq', 'access_token')
    if (error) {
      return {
        statusCode: 400,
        body: 'Cannot get token from supabase',
      }
    }
    const token = data[0].value
    const url = 'https://api.spotify.com/v1/me/player/recently-played'
    const config = {
      params: { limit: 1 },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    // get recently played songs with token from supabase
    const response = await axios.get(url, config)
    if (response.status !== 200) {
      return {
        statusCode: response.status,
        body: response.message,
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    // console.log(error.response)
    return {
      statusCode: error.response.status,
      body: error.response.statusText,
    }
  }
}
