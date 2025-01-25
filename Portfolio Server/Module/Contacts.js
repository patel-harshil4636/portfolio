const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/portfolio').then(()=>
{
console.log('connected');
}).catch((err)=>{
    console.error('error connecting',err);
})


const contactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
   profession:{
        type:String,
        required:true
    }
});

const Contact=mongoose.model('Contact',contactSchema);

module.exports=Contact;