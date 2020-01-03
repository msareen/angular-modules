//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/module-test/deployment'));

app.get('/*', function(req,res) {
   res.sendFile(path.join(__dirname+'/module-test/deployment/module-test/index.html'));
});

// Start the app by listening on the default Heroku
app.listen(process.env.PORT || 8080);

