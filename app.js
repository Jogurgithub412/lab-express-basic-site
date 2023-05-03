const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request, response, next)=>{

    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response)=>{
    response.sendFile(__dirname + '/views/about.html');
   
});

app.get('/albums', (request, response)=>{
    response.sendFile(__dirname + '/views/albums.html');
 });
         
 


/*     response.sendFile(__dirname + '/views/bio.html');
 */

// Start the Server
app.listen(3000, ()=> console.log('App is listening on PORT 3000'));