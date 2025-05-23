const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken'); 


const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            minlength:[2,'First name must have 2 characters'],
            required:true
        },
        lastname:{
            type:String,
            required:true
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true, 
        match:[/^\S+@\S+\.\S+$/,'Please enter a valid email address'], 
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    isActive:{
        type:String,
        enum:['active','inactive'],
        default:'active'
    },
    socketId:{
        type:String
    },
    vehicle:{
        color:{
            type:String,
            required:true
        },
        plate:{
            type:String,
            required:true,
            minlength:[4,'Plate number must have 4 characters'], 
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Capacity must be greater than 0'], 
        }, 
        vehicleType:{
            type:String,
            enum:['bike','car','auto'],
            required:true
        },
        location:{
            lat:{
                type:Number,
            },
            lng:{
                type:Number,
            }
        }
    }
});

captainSchema.methods.generateAuthToken=function(){ 
    const token=jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'1h'});
    return token;
} 
captainSchema.methods.comparePassword=async function(password){ 
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword=async function(password){ 
    return await bcrypt.hash(password,10);
} 
const captainModel=mongoose.model('captain',captainSchema); 

module.exports=captainModel; 