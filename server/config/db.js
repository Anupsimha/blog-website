const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected : ${conn.connection.host}`);   //conn.connection.host gives the host name of the database i.e 
    }                                                                  //localhost or the ip address of the database (here, it is MongoDB Atlas).
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;