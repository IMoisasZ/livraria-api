import LivroInfoService from '../services/livroInfo.service.js'

async function createLivroInfo(req, res, next){
    try {
        let livroInfo = req.body
        res.send(await LivroInfoService.createLivroInfo(livroInfo))
    } catch (err) {
        next(err)
    }
}

async function updateLivroInfo(req, res, next){
    try {
        let livroInfo = req.body
        res.send(await LivroInfoService.updateLivroInfo(livroInfo))
    } catch (err) {
        next(err)
    }
}

async function deleteLivroInfo(req, res, next){
    try {
        await LivroInfoService.deleteLivroInfo(req.params.livro_id)
        res.status(200).send(`As informações do livro de ID ${req.params.livro_id} from excluidas com sucesso!`)
    } catch (err) {
        next(err)
    }
}

async function getLivroInfo(req, res, next){
    try {
        res.send(await LivroInfoService.getLivroInfo(req.params.livro_id))
    } catch (err) {
        next(err)
    }
}

async function createAvaliacao(req, res, next){
    try {
        const avaliacao = req.body        
        res.send(await LivroInfoService.createAvaliacao(req.params.livro_id, avaliacao))
    } catch (err) {
        next(err)
    }
}

async function deleteAvaliacao(req, res, next){
    try {
        res.send(await LivroInfoService.deleteAvaliacao(req.params.livro_id, req.params.index))
    } catch (err) {
        next(err)
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