
const captainModel=require('../models/captain.model');
const captainService=require('../services/captain.service');
const {validationResult}=require('express-validator'); 


module.exports.registerCaptain=async(req,res,next)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors:errors.array()});
    }

    const{fullname,email,password,vehicle}=req.body;

    const captainAlreadyExists=await captainModel.findOne({email});
    if(captainAlreadyExists){
        return res.status(400).json({message:'Captain already exists'});
    }

    const hashedPassword=await captainModel.hashPassword(password);
    const captain=await captainModel.create({
        fullname:{
            firstname:fullname.firstname,
            lastname:fullname.lastname
        },
        email,
        password:hashedPassword,
        vehicle: {
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType 
        }
       
    }); 

    const token=await captain.generateAuthToken(captain._id);
     
    res.status(201).json({token,captain})
 }

 module.exports.loginCaptain=async(req,res,next)=>{

    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const{email,password}=req.body;
    const captain=await captainModel.findOne({email}).select('+password');;
    if(!captain){
        return res.status(401).json({message:"Invalid email or Password"});
    }
    const isMatch=await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or Password"});
    }
    const token=await captain.generateAuthToken();

    res.cookie('token',token);
    res.status(200).json({token,captain});
}

module.exports.getCaptainProfile=async(req,res,next)=>{
    res.status(200).json({captain:req.captain});
}

module.exports.logoutCaptain=async(req,res,next)=>{
    res.clearCookie('token');
    res.status(200).json({message:'Logged out successfully'})
}