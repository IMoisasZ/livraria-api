import mongoose from 'mongoose'

async function conn(){
    const uri = 'mongodb+srv://moisas:d16m09@cluster0.csnbh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    return await mongoose.connect(uri )//{ userNewUrlParser: true, userUnifiedTopology: true })
}

export { conn }
