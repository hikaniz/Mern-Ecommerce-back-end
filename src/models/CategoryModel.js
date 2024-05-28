const mongoose=require('mongoose');
const DataSchema=mongoose.Schema({
        categoryName:{type:String,unique:true,required:true},
        categoryImg:{type:String,required:true}
    },
    {timestamps:true,versionKey:false}
)
const CategoriesModel=mongoose.model('categories',DataSchema)
module.exports=CategoriesModel