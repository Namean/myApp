const express = require('express')
const app = express()
const path = require('path');
const cors = require('cors')

const fs = require('fs')
var https = require('https');
var http = require('http')
//app.use(express.urlencoded());
//app.use(bodyParser.urlencoded({ extended: true }));
// https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

  var ca;
	var key = fs.readFileSync('encryption/private.key');
	var cert = fs.readFileSync( 'encryption/primary.crt' );
	//var ca = fs.readFileSync( 'encryption/intermediate.crt' );

  function x(arg) {
    var jsonString = JSON.stringify(arg, null, 2);
    fs.writeFileSync('data.json', jsonString, 'utf8');
  }

  function y() {
    var raw = fs.readFileSync('data.json');
    str = raw.toString();
     let  obj = JSON.parse(str);
    console.log(obj);
    }

var options = {
  key: key,
  cert: cert,
  ca: ca
};

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/' + 'index.html');
})

app.get('/static', (req, res, next) => {
  res.sendFile(__dirname + '/' + 'public/src/index.js');
})

app.get('/with-cors', cors(), (req, res, next) => {
  res.json({ msg: 'WHOAH with CORS it works! 🔝 🎉' })
})

function saveData(arg) {
    let json = JSON.stringify(arg, null, 4);
    // fs.writeFile
    // const data = new Uint8Array(Buffer.from('Hello Node.js'));
    fs.writeFile('data/data.json', json, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

app.post('/post', cors(), (req, res, next) => {
//  res.json({ msg: 'POST received' })
    console.log(req);
    saveData();
})

app.post('/test', cors(), (req, res, next) => {
    console.log("You've hit the /test endpoint!");
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password);
    res.send('Great job!');
})

app.post('/process_post', cors(), (req, res, next) => {
    // Prepare output in JSON format.
    response ={myQuery: req.query.first_name }
    console.log(response);
    var json = JSON.stringify(response, null, 4);
    //fs.writeFileSync('data.json', json);
    x(json);
    y()
    res.end(json);
    res.redirect(__dirname +'/' + 'index.html');
})

console.log( ' Starting HTTP aplication listneing @port 80');
http.createServer(app).listen(80);


//app.listen(3000);
// console.log(' HTTPS Application listening @port 443');
 https.createServer(options, app).listen(443);
