const express=require('express')
const app=express()
const port=8000

app.get('/',(req,res)=>{
    res.write("<h1>welcome to my home page</h1>")
    res.write("<h1>welcome to my home page</h1>")
    res.send()

})

app.get('/about',(req,res)=>{
    res.send("welcome to my about page")
})



app.get('/contact',(req,res)=>{
    res.send("welcome to my contact page")
})

app.get('/temp',(req,res)=>{
    res.json(
[
        {
        id:1,
        name:"piyush"
    },
    {
        id:1,
        name:"piyush"
    },
    {
        id:1,
        name:"piyush"
    }
]
    )
})





app.listen(port,()=>{
    console.log(`listening to the port number ${port}`)
})