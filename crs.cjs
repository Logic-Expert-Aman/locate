const puppeteer = require('puppeteer');
var express = require('express');  
var app = express(); 

app.get('/', function (req, res) {  
 
var result; 
let promise;
async function sc(){
  const browser = await puppeteer.launch({
    headless: false,
  
  })
  const page = await browser.newPage()
  await page.setDefaultNavigationTimeout(0)

 await page.goto('https://www.coindesk.com/price/bitcoin/')

 result = await page.evaluate(() => {
 return document.querySelector('div.Box-sc-1hpkeeg-0.jwYVXk').textContent
})
 await console.log(result)
}
sc();
res.send("Worked")
})
var server = app.listen(8000 , function (){  
  var host = server.address().address  
    var port = server.address().port  
   console.log("Example app listening at", host, port) 
  }) 