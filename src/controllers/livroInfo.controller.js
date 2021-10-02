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

export default {
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo
}