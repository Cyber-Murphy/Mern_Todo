const mongoose= require('mongoose')

const TodoSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    completed:{
        type:Boolean,
        required:false,
    }

},{timestamps:true})


module.exports= mongoose.model('TodoTask', TodoSchema)