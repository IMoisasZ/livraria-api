import mongoose from 'mongoose'

async function connect(){
    const uri = "mongodb+srv://moisas:d16m09@cluster0.xlo8h.mongodb.net/test"
    return await mongoose.connect(uri)
}

export { connect }