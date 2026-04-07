// http server that supports 4 routes(/sum,/sub,/div,/mul)
//express,hono elysiajs,trpc
//express is external dependency that you have to fetch from the internet
//express is package of node

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/sum", function(req , res){
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);

   if(isNaN(a) || isNaN(b)) {
      return res.status(400).json({ error : "Invalid numbers" });
   }
   const sum = a + b ;
   res.json({
      ans : sum 
   });
});

app.post("/sub", function(req , res){
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);

   if(isNaN(a) || isNaN(b)){
      return res.status(400).json({error: "Invalid numbers"});
   }
   
   const substract = a - b ;
   res.json ({
      ans : substract
   });
});

app.post("/mul", function(req , res){
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);

   if(isNaN(a) || isNaN(b)){
      return res.status(400).json({error: "Invalid numbers"});
   }
   
   const multiply = a * b ;
   res.json ({
      ans : multiply 
   });
});

app.post("/div", function(req , res){
   const a = parseInt(req.body.a);
   const b = parseInt(req.body.b);

   if(isNaN(a) || isNaN(b)){
      return res.status(400).json({error: "Invalid numbers"});
   }
   
   const divide = a / b ;
   res.json ({
      ans : divide
   });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});