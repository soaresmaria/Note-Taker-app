const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/api/notes", (req,res)=>{

    readFileAsync("./db/db.json", "utf8")
    .then((result, err)=>{
        if(err) console.log(err);       
        return res.json(JSON.parse(result));       
    });     
});


app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
});