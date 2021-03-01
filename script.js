/* WEBSERVER WITH PLAIN NODE.JS 

let http = require("http")

let ourApp = http.createServer((req, res)=>{
 if(req.url == '/'){
  res.end('Hej och välkommen till startsidan!')
 }else if(req.url == '/about'){
  res.end('Hej och välkommen till om oss!')
 }else {
  res.end('Hej och välkommen. Sidan finne ej!')
 }
 
})
ourApp.listen(3000) */

/* WEBSERVER WITH EXPRESS (npm install express) */

let express = require("express");
let ourApp = express(); //skapa en expresserver som heter ourApp
//ourApp.get(param1 url som usern knappar in, param2 funktion som då körs. Funktionen tar två parametrar (req,res) precis som node)
ourApp.use(express.urlencoded({extended: false}))
ourApp.get('/', function(req, res){
 //Här körs express-metoden send
 res.send(`
   <form action="/answer" method="POST">
    <p>What is the color of the sunny sky?</p>
    <input name="sky" autocomplete="off">
    <button>Submit</button>
   
   </form>
 `)
} )

ourApp.post("/answer", (req,res)=> {
  if(req.body.sky.toLowerCase() == "blue"){
   res.send(`
    <p>KANON!</p>
    <a href="/">GO BACK</a>
   `)

  }else{
     res.send(`
    <p>FEL!</p>
    <a href="/">GO BACK</a>
   `)
  }
})
 


ourApp.listen(3000)