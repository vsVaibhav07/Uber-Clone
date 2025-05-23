const userModel=require('../models/user.model');

module.exports.createUser=async({firstname,lastname,email,password})=>{
    if(!firstname || !lastname || !email || !password){
        throw new Error("All Fields are required");
    }

    const existingUser = await userModel.findOne({ email });
    if(existingUser) {
        throw new Error("User already exists with this email");
    }

    const user=await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
} 