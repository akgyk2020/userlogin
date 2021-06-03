
const express = require('express');
const app = express();
// route untuk halaman Home
app.get('/',(req,res)=>{
    res.send('Welcome To Express');
});

// route untuk halaman About
app.get('/about',(req,res)=>{
    res.send('This About Pages');
});

//old ----------------------------------
//const http = require('http');
//http.createServer(function(req,res){
  //  res.writeHead(200,{
    //            });
    //res.end("Hello Word");
//}).listen(8000);

//console.log('server is running at port 8000') 

//-----------------------------------------------


app.listen(8000,()=>{
    console.log('Server running on port 8000');
});