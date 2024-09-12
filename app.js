const express = require ("express");
const app = express();
const mongoose = require('mongoose');
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const path = require("path");

app.listen(8080,()=>{
    console.log("app listening on port 8080");
})

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);  
app.use(express.static(path.join(__dirname , "/public")));


app.get("/",(req,res)=>{
    res.render("index.ejs");
})