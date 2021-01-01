var express=require('express');
var app=express();
var cors = require("cors");
app.use(cors());
app.get('/',function(req,res)
{

res.send('Hello World!');
});

app.route("/page1").get(function(req,res)
{
res.send('welcome to page2!');
});

app.route("/page2").get(function(req,res)
{
 
   // res.send("hiii");
res.download('textdaata.txt');
});

var server=app.listen(3000,function() {});