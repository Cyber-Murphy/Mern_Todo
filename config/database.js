const mongoose= require('mongoose')

const ConnectmongoDB= async()=>{
  await  mongoose.connect('mongodb+srv://gaurav1:gaurav123@cluster0.0w0ur.mongodb.net/TodoList')
}

module.exports=ConnectmongoDB