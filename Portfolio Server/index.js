const express=require('express');
const app= express();
const routes=require('./Routes/Contact')
app.use(express.urlencoded({ extended: true })) 
app.use('/',routes);
app.listen(8000,()=>
{
    console.log("Server Starts");
    
})