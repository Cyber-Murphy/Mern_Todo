const express= require('express')
const app=express()
const ConnectmongoDB= require('./config/database')
const TaskRouter=require('./routes/task')
app.use(express.json())

app.use('/task',TaskRouter)








ConnectmongoDB().then(()=>{
    console.log("database connected successfully");
    app.listen(4000, ()=>{
        console.log('port connected successfully');
        
    })
    
}).catch((error)=>{
    console.error('db not connected');
    
    
})