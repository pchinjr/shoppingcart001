let data = require('@begin/data')

exports.handler = async function http (req) {
  let result = await data.get({ table: 'cart' })
  return result
}
