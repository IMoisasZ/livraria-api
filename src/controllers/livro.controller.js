import LivroService from '../services/livro.service.js'

async function createLivro(req, res, next){
    try {
        let livro = req.body
        res.send(await LivroService.createLivro(livro))
    } catch (err) {
        next(err)
    }
}

async function updateLivro(req, res, next){
    try {
        let livro = req.body
        res.send(await LivroService.updateLivro(livro))
    } catch (err) {
        next(err)
    }
}

async function deleteLivro(req, res, next){
    try {
        await LivroService.deleteLivro(req.params.livro_id)
        res.status(200).send(`O livro de ID ${req.params.livro_id} foi excluido com sucesso!`)
    } catch (err) {
        next(err)
    }
}

async function getLivro(req, res, next){
    try {
        res.send(await LivroService.getLivro(req.params.livro_id))
    } catch (err) {
        next(err)
    }
}

async function getLivros(req, res, next){
    try {
        res.send(await LivroService.getLivros(req.query.autor_id))
    } catch (err) {
        next(err)
    }
}

export default {
    createLivro,
    updateLivro,
    deleteLivro,
    getLivro,
    getLivros
}