const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const PORT = 3000;

router.get('/', function(req,res){
   res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/src'));
//app.listen(process.env.port || 3000);
app.listen(PORT);
console.log('Running at port: ' + PORT);
