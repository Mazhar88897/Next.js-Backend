import mongoose from 'mongoose';
let isconnected = false;


export const connToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGO_URL){
        console.log("URL is not provided");
    }

    if(isconnected){
        console.log("Connetion is established");
    }

    try{
        await mongoose.connect( "mongodb+srv://maz:maz@cluster0.b0ommab.mongodb.net/Topicdb?retryWrites=true&w=majority" )
        isconnected = true;

        console.log("Connected to DB")



    } catch(err){
        console.log(err)

    }
}