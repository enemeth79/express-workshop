// import Express
var express = require('express');
// Initialise the server
// This will create an Express application for us to work with.
var app = express();

// use another Express middleware. 
// It will extract the form data from the request and make it available to you when you do `req.fields`
var formidable = require('express-formidable');
app.use(formidable());

// Serve static files from your server
// serve all the static assets in our "public" folder
app.use(express.static("public"));

// use `fs` (stands for 'file-system')
// you'll need to require it at the top of your server file
var fs = require('fs');


app.post('/create-post', function(req, res) {
    // here is the new post
    console.log(req.fields['blogpost']);
    var newPost = req.fields['blogpost'];
    var oldPosts;

    fs.readFile(__dirname + '/data/posts.json', function(error, file) {
        // `parsedFile` is a normal JavaScript object, and we can access the data inside it.
        console.log(file.toString());
        oldPosts = JSON.parse(file);
        //oldPost.stringify();
        if (oldPosts == undefined)
            console.log('undefined');
        else
            console.log(oldPosts);

        oldPosts[Date.now()] = newPost;
        console.log(oldPosts);

        fs.writeFile(__dirname + '/data/posts.json', JSON.stringify(oldPosts), function(error) {
            // `parsedFile` is a normal JavaScript object, and we can access the data inside it.
            if (error)
                console.error(error);
            else
                console.log('file is updated.')


        });

    });
    res.sendFile(__dirname + '/data/posts.json');

    
});

app.get('/my-lovely-endpoint', function(req, res) {
    res.send('Hello there!');
});



// read the data from the `posts.json` file.


// Start 'listening' for potential requests
// run our server on port `3000` (`8080` if you are using cloud9),
app.listen(8080, function() {
    // run a simple `console.log` as our callback function
    console.log('Server is listening on port 8080. Ready to accept requests! - by ENemeth79');
});
