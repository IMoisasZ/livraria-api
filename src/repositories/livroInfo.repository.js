import { connect } from '../connections/dbMongoose.connection.js'
import LivroInfoSchema from '../schemas/livroInfo.schema.js'

async function createLivroInfo(livroInfo){
    try {
        const mongoose = await connect()
        const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema)
        livroInfo = new LivroInfo(livroInfo)
        await livroInfo.save()
    } catch (err) {
        throw err
    }
}

async function updateLivroInfo(livroInfo){
    try {
        const mongoose = await connect()
        const LivroInfo = mongoose.model('LivroInfo', LivroInfoSchema)
        await LivroInfo.findOneAndUpdate({ livro_id: livroInfo.livro_id }, livroInfo)
    } catch (err) {
        throw err
    }
}

async function deleteLivroInfo(livro_id){
    try {
        const mongoose = await connect()
        const LivroInfo = mongoose.model('LivroInfo', LivroInfoSchema)
        await LivroInfo.deleteOne({ livro_id })
    } catch (err) {
        throw err
    }
}

export default {
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo
}