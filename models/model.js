const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/authin').then(()=>{
    console.log('connected db')
}).catch(()=>{
    console.log('disconnected')
})

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      secret: {
        type: String,
        required: true,
        unique: true,
      }
    
    
})
const user = mongoose.model('users',userschema)
module.exports = user