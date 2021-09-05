const express = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');
const app = express();
const PORT = process.env.PORT || 3000;
const readFileAsync = util.promisify(fs.readFile);


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());


app.get("/api/notes", (req,res)=>{

    readFileAsync("./db/db.json", "utf8")
    .then((result, err)=>{
        if(err) console.log(err);       
        return res.json(JSON.parse(result));       
    });     
});

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.post("/api/notes", (req,res)=>{
    let newNote = req.body;
   
    readFileAsync("./db/db.json", "utf8")
    .then((result, err)=>{
        if(err) console.log(err);
        return Promise.resolve(JSON.parse(result));               
    })
    
});


app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});