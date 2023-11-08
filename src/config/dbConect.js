import mongoose from "mongoose";

async function conectNaDatabase(){
    mongoose.connect("mongodb+srv://danieljijoca:root@cluster0.1o7sv1d.mongodb.net/livraria?retryWrites=true&w=majority")

    return mongoose.connection;
}

export default conectNaDatabase;