
function cc(b){
document.getElementById('btc').innerHTML = b
var c = parseFloat(b.slice(1,3)+b.slice(4,10))

  console.log(c)
  return b;
}
  // async
   $.getJSON('data.json', function(data){
      //display your data however you want.
      cc(data.result)
      
 })
 
 var d = "$cat,iv"
m= d.slice(1,4)+d.slice(5,7)
console.log(m)
 // }