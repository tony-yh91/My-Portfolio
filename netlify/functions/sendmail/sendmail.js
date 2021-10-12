const nodemailer = require('nodemailer')

const handler = async (event) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      },
    })
    const body = JSON.parse(event.body)
    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: process.env.MAIL_USERNAME,
      subject: `${body.name} - ${body.email}`,
      text: body.description,
    }
    await transporter.sendMail(mailOptions)
    return {
      statusCode: 200,
      body: 'Email sent!',
    }
  } catch (error) {
    console.error('error', error)
    const errorObj = {
      statusCode: error.response ? error.response.status : 500,
      body: error.response ? error.response.statusText : error.message,
    }
    return errorObj
  }
}

module.exports = { handler }
