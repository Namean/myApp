// file-handler.js

const fs = require('fs');


function createFile(file_name) {

  // check for file existance
  // if file exists
  //return;
  // if file does not exist
  
  let data = [{"msg": "Great Job!"}];
  json = JSON.stringify(data, null, 4);
  fs.writeFile(file_name, json, (err) => {
    if (err) throw err;
    console.log('Writing file to disk!');
  });
}

function readFile(file_name) {
  // check for file existance

  // if file exists
  //let f = fs.readFile(file_name, () => {});
    let f = fs.readFileSync(file_name).toString();
    let json = JSON.parse(f);
    return json;
}


function writeData(data) {
    json = JSON.stringify(data, null, 4);
    fs.writeFile('test.json', json, (err) => {
      if (err) throw err;
      console.log('Writing file to disk!');
  });    
}


//let file = readFile('test.json');
//console.log(file);
let f = readFile('test.json');


