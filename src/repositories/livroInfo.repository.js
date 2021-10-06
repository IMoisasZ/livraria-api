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

async function getLivroInfo(livro_id){
    try {
        const mongoose = await conn()
        parseInt(livro_id)
        const LivroInfo = mongoose.model('LivroInfo', LivroInfoSchema)
        const livro = LivroInfo.findOne({ livro_id })
        return await livro.exec()
    
    } catch (err) {
        throw err
    }
}

async function createAvaliacao(livro_id, avaliacao){
    try {
        const livro = await getLivroInfo(livro_id)
        livro.avaliacoes.push(avaliacao)
        await updateLivroInfo(livro)
        return await livro
    } catch (err) {
        throw err
    }
}

async function deleteAvaliacao(livro_id, index){
    try {
        const livro = await getLivroInfo(livro_id)
        livro.avaliacoes.splice(index-1, 1)
        await updateLivroInfo(livro)
        return await getLivroInfo(livro_id)
    } catch (err) {
        throw err
    }
}

export default {
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo,
    getLivroInfo,
    createAvaliacao,
    deleteAvaliacao
}