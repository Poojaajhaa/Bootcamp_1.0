// http server that supports 4 routes(/sum,/sub,/div,/mul)
//express,hono elysiajs,trpc
//express is external dependency that you have to fetch from the internet
//express is package of node

const express = require("express");

const app = express();
const port = 3000

/ //http://ocalhost:3000/sum/?a=2&b=4

// app.get("/sum", function(req , res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     const sum = a + b ;
// //for json
//     // res.json ({
//     //     ans:sum
//     // })
//  // for plain txt  
//    res.send(sum.toString());
//   //for html
//   //res.send("<b><u>" + sum.toString() + "</u></b>")  
// })

// http://localhost:3000/sum/1200/2

app.get("/sum/:a/:b", function(req , res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a + b ;
     res.json({
        ans : sum
     })

})

app.get("/sub/:a/:b", function(req , res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a - b ;
     res.json({
        ans : sub
     })

})

app.get("/mul:a/:b", function(req , res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a * b ;
     res.json({
        ans : sum
     })

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
