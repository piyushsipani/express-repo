const express=require('express')
const app=express()
const port =8000
const path=require("path")


const templatePath=path.join(__dirname,"../templates")

//to set the view engine
app.set('view engine','hbs')
app.set('views',templatePath)

//built in middleware
//app.use(express.static(path.join(__dirname,"../public")))

//template engine route
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/",(req,res)=>{
    res.send("hello from the express server")
})



app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})

