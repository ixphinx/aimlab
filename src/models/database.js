const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    //User Data
    user: String,
    password: String,
    userid: String,
    username: String,
    userlastname: String,
    usermail: String,
    
    //Task Data
    taskname: String,
    taskid: String,
    taskscore: String,
    taskmod: String,
    


});

module.exports= mongoose.model('Data', Data);
