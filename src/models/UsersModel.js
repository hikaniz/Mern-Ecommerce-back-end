const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
        email:{type:String,unique:true,required:true,lowercase:true},
        otp:{type:String,required:true}
    },
    {timestamps:true,versionKey:false}
)
const UsersModel=mongoose.model('users',DataSchema)
module.exports=UsersModel