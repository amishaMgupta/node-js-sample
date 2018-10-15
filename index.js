var express = require('express')
var app = express()
// this basic node js app.
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
// this is default url.
app.get('/', function(request, response) {
  response.send('Hello World!')
})
// This is running on the post 5000.

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
