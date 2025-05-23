const mongoose=require('mongoose');


function connectToDB(){
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
        console.log("Database connected..");
    }).catch((error)=>{
        console.log("Database error" ,error)
    })
}

module.exports=connectToDB;