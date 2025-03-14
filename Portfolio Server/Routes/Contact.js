const express= require('express');
const routes=express.Router();
const Contact=require('../Module/Contacts');


routes.post('/Contact',async(req,res)=>{
    // const result=await Contact.find({name:req.body.name,email:req.body.email});
     
    
    if(!req.body.name || !req.body.email || !req.body.profession)
        {
   
            
            res.status(400).redirect('http://localhost:5173/Contact');
            
            
            
            
        }
        
        else

        {
            const result= await Contact.create({name:req.body.name,email:req.body.email,profession:req.body.profession});
            res.status(200).redirect('http://localhost:5173/');
          
        }
       
    
})
module.exports = routes;