let data = require('@begin/data')
let qs = require('querystring')

exports.handler = async function http (req) {

  let b64decoded = Buffer.from(req.body, 'base64').toString()
  let formDecoded = qs.parse(b64decoded)
  await data.set({ table: 'cart', ...formDecoded })

  return {
    statusCode: 303,
    headers: {
      location: '/'
    }
  }
}
