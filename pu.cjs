const puppeteer = require('puppeteer');
const fs = require('fs');

var jsdom = require("jsdom");
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

    await page.goto('http://127.0.0.1:5501/tnt.html')
      // await page.goto('')
  let rsult = await page.evaluate(() => {
    return document.querySelector('#c').textContent
  })
//     const { JSDOM } = jsdom;
//     const { window } = new JSDOM();
//     const { document } = (new JSDOM()).window;
//     global.document = document;

// var $ = jQuery = require('jquery')(window);

 await page.type('#r','7');
let con=1;
  await page.click('.bt')
  result = await rsult;
  let myPromise = await new Promise(async function(myResolve, myReject){
    console.log("WO")
  await setInterval(async function(){
      result = await page.evaluate(() => {
        return document.querySelector('#c').textContent
      })
      con++;
      console.log(rsult)
      console.log(result)
      if(result!=rsult){
      myResolve(result)
      console.log("0"+result+"HO")
      console.log(rsult)
      browser.close()
      }
      if(con>=10)
      browser.close()
    },100);
  }).then((value) =>{
    console.log(value)
    setTimeout(function() {
    
    },1000)
 }
    )
  // await (rsult==result){
   
  // }
//  await function to(){
//    console.log("Work")

//     l1:if(rsult == result) 
//       to()
//     else 
//     return result;
    
// }
// to();
// promise.then((value) => {console.log(value);
// browser.close()})

// await console.log(ans)
// await browser.close()
return result;
}

sc();

// let myPromise = new Promise(function(myResolve, myReject) {
//   setTimeout(function() { myResolve("I love You !!"); }, 3000);
// });
// myPromise.then(function(value) {
// console.log(value)

// });
res.send("Works")

})
  
var server = app.listen(8000 , function (){  
var host = server.address().address  
  var port = server.address().port  
 console.log("Example app listening at", host, port) 
}) 

