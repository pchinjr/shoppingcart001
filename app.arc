@app
begin-app

@static
@http
get /cart # read cart contents
post /cart  # add item to cart

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
