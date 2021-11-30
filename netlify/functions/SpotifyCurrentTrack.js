const axios = require('axios')
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SECRET_KEY)

exports.handler = async () => {
  try {
    // get access_token form supabase
    const { data } = await supabase
      .from('Auth')
      .select('value')
      .filter('name', 'eq', 'Spotify')
      .filter('type', 'eq', 'access_token')
    const token = data[0].value

    // get current playing song with token from supabase
    const url = 'https://api.spotify.com/v1/me/player'
    const config = {
      params: { market: 'US' },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios.get(url, config)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    console.error('error', error)
    return {
      statusCode: error.response ? error.response.status : 500,
      body: error.response ? error.response.statusText : error.message,
    }
  }
}
