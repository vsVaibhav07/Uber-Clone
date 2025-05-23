const userModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const captainModel = require('../models/captain.model');


module.exports.authUser=async(req,res,next)=>{ 

    const token=req.cookies.token || req.headers.authorization?.split(' ')[1]
   if(!token || token===undefined || token===null || token===""){  
        return res.status(401).json({message:'Unauthorized'})
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET); 
        const user=await userModel.findById(decoded._id)
        if(!user){
            return res.status(401).json({message:'Unauthorized'})
        }
        req.user=user;
        next(); 
        
    } catch (error) {
        return res.status(401).json({message:'Unauthorized'});
        
    }

}

module.exports.authCaptain=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        res.status(401).json({message:'Unauthorized'});
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET); 
        const captain=await captainModel.findById(decoded._id);
        if(!captain){
            return res.status(401).json({messsage:Unauthorized});
        }
        req.captain=captain;
        next();
        
    } catch (error) {
        res.status(401).json({message:'Unauthorized'});
        
    }
}