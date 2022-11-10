// var http = require('http');
// const puppeteer = require('puppeteer');

// var fs = require('fs');
// http.createServer(function (req, res) {
//   async function sc(){
//     const browser = await puppeteer.launch({
//       headless: false
//     })
//     const page = await browser.newPage()
//     await page.goto('http://127.0.0.1:5501/tnt.html')

//     let promise = Promise.resolve(
//       result = await page.evaluate(() => {
//        return document.querySelector('h1').textContent
//      }))
//      promise.then((value) => {console.log(value);
//      })
//      await page.close()
//      console.log(result)
//      return result;
//      }
//      sc()
// res.end("Working")     

// }).listen(8080); 

var express = require('express');  
var app = express(); 

var jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM('',{
  url:"http://127.0.0.1:5501/tnt.html",
  contentType:"text/html"
});

app.get('/', function (req, res) {  
  console.log("OK", req.body)
  res.sendFile(__dirname+'/ntry.html');
})

app.post('/nto',function(req,res){
console.log("KO")
res.sendFile(dom)
})

app.listen(8000)