const express=require('express')
const mongoose = require('mongoose')
const route = require("./route")
const bodyParser= require("body-parser")

                                    //give database name here...
mongoose.connect("mongodb+srv://dkm001:dkm001@cluster0.d93zi.mongodb.net/Employee?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>
    {
        const app=express();

        app.use(bodyParser.urlencoded({extended:true}))
        app.use(express.json())

        app.use("",route)

        app.listen(process.env.PORT || 3000,()=>{
            console.log("Server started!...")
        })
    }
)