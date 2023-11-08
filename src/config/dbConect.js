import mongoose from "mongoose";

async function conectNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING_)

    return mongoose.connection;
}

export default conectNaDatabase;