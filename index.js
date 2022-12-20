const app = require("./app");
const port = process.env.PORT || 5000;

// route error handle
app.use((req,res,next)=>{
    res.status(404).json({message: "404 page not found"})
})

// server error handle
app.use((error,req,res,next)=>{
    res.status(500).json({message: "server is broken"})
})



app.listen(port, ()=>{
    console.log(`server is run http://localhost:${port}`)
});