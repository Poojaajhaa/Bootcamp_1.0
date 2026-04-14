const express = require("express");
const jwt = require("jsonwebtoken");
const  authMiddleware = require("./middleware");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true
}));

const port = 3000;

const notes = [] 
const user = [{
    username: "xyz",
    password: "123409"
}];

//signup
app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;    const jwt = require("jsonwebtoken");    const jwt = require("jsonwebtoken");

    const userExists = user.find(user => user.username === username);

    if(userExists){
        return res.status(403).json({
            message : "user already exists"
        })
    }

    user.push({
        username : username,
        password : password
    })
    res.json({
        message : "you have signed up"
    })
})

//signin
app.post ("/signin" , function(req , res){
    const username = req.body.username;
    const password = req.body.password;

    const userExists = user.find(user => user.username === username && user.password === password);

    if(!userExists){
        res.status(403).json ({
            message : "Invalid credentials"
        })
        return;
    }

    const token = jwt.sign({
        username : username
    } , "123456");

    res.json ({
        token : token
    })
    
})

//create a note(post)
app.post("/notes" , authMiddleware ,function(req , res){
    const username = req.username;
    const note = req.body.note;
    notes.push({
        note : note , 
        username : username
    });

    res.json ({
        message : "Done"
    })

})
// get all my notes(get)
app.get("/notes" , authMiddleware ,function(req , res){
    const username = req.username;
    const userNotes = notes.filter(note => note.username === username);
     
    res.json({
        notes: userNotes
    })
})

app.get("/" , function(req , res){
    res.sendFile("/Users/suraj/Desktop/Bootcamp1.0/webdev/week9/notes-app/frontend/index.html")
})

app.get("/signin" , function(req , res){
    res.sendFile("/Users/suraj/Desktop/Bootcamp1.0/webdev/week9/notes-app/frontend/signin.html")
})

app.get("/signup" , function(req , res){
    res.sendFile("/Users/suraj/Desktop/Bootcamp1.0/webdev/week9/notes-app/frontend/signup.html")
})

app.listen(port);