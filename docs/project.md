
## 304 in cors_server.py
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304


## JavaScript millisecond timestamp
https://www.toptal.com/software/definitive-guide-to-datetime-manipulation

var d = new Date();
d.getTime(); // => 1578248303991


## JavaScript Default Parameters
https://www.javascripttutorial.net/es6/javascript-default-parameters/
method = typeof method !== 'undefined' ? method : 'GET';


## JavaScript Promises
https://javascript.info/promise-basics


## Refresh the server when the data changes as it gets stale.


## Merging branch into master
https://stackabuse.com/git-merge-branch-into-master/


## npm init
adding a package.json to myApp

## .gitignore
Be sure to add node_modules to .gitignore



## Uninstall npm modules
https://stackoverflow.com/questions/13066532/how-to-uninstall-npm-modules-in-node-js
$ npm uninstall <module_name>


# Mocha
https://mochajs.org/#getting-started

# Chai
https://www.chaijs.com/


# Unit Testing Routes
https://stackoverflow.com/questions/9517880/how-does-one-unit-test-routes-with-express


# Node.js
https://nodejs.org/en/docs/guides/

# fs.WriteFile
https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});



# File Descriptors
https://en.wikipedia.org/wiki/File_descriptor



# Persisting Data via Routes
We need to add a route to server.js that is able to access fs
Let's use /post since it doesn't do much as of now.


# Installing Nodemon
npm install --save-dev nodemon


# Download PostMan
https://www.getpostman.com/downloads/



# How to submit data with an HTML form
https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data

### Flavio Does it again!!
https://flaviocopes.com/express-forms/ 



So everytime I get so far in my projects there is a point where I'm trying to submit data to my server.
But for some reason I can't get the values to show up in the terminal. Or they server won't accept them.
This is dependent on a few things being correct.


The HTML form action, input attr ,name
<form method="POST" action="http://127.0.0.1:80/test">
        <input type="text" name="username" />
        <input type="submit" value="Submit" />
    </form>
The Server's route handler must access the data sent of the HTTP
response.body.<form-name>

app.post('/test', cors(), (req, res, next) => {
    console.log("You've hit the /test endpoint!");
    const username = req.body.username;
    console.log(username);
    res.send('Great job!'); // Reward thy self with a good message
})


This technique also allows for multi part form data to be sent!

   <form method="POST" action="http://127.0.0.1:80/test">
        <input type="text" name="username" />
        <input type="text" name="password" />
        <input type="submit" value="Submit" />
    </form>





