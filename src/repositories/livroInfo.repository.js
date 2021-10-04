import { conn } from '../connections/dbMongoose.connection.js'
import LivroInfoSchema from '../schemas/livroInfo.schema.js'
import LivroInfoAvalicaoSchema from '../schemas/livroInfoAvaliacao.schema.js'

async function createLivroInfo(livroInfo){
    try {
        const mongoose = await conn()
        const LivroInfo = mongoose.model("LivroInfo", LivroInfoSchema)
        livroInfo = new LivroInfo(livroInfo)
        return await livroInfo.save()
    } catch (err) {
        throw err
    }
}

async function updateLivroInfo(livroInfo){
    try {
        const mongoose = await conn()
        const LivroInfo = mongoose.model('LivroInfo', LivroInfoSchema)
        await LivroInfo.findOneAndUpdate({ livro_id: livroInfo.livro_id }, livroInfo)
    } catch (err) {
        throw err
    }
}

async function deleteLivroInfo(livro_id){
    try {
        const mongoose = await conn()
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