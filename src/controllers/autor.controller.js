import AutorService from '../services/autor.service.js'

async function createAutor(req, res, next){
    try {
        let autor = req.body
        res.send(await AutorService.createAutor(autor))
    } catch (err) {
        next(err)
    }
}

async function updateAutor(req, res, next){
    try {
        let autor = req.body
        res.send(await AutorService.updateAutor(autor))
    } catch (err) {
        next(err)
    }
}

async function deleteAutor(req, res, next){
    try {
        await AutorService.deleteAutor(req.params.autor_id)
        res.status(200).send(`O autor com o ID ${req.params.autor_id} foi excluido com sucesso!`)
    } catch (err) {
        next(err)
    }
}

async function getAutores(req, res, next){
    try {
        res.send(await AutorService.getAutores())
    } catch (err) {
        next(err)
    }
}

async function getAutor(req, res, next){
    try {
        res.send(await AutorService.getAutor(req.params.autor_id))
    } catch (err) {
        next(err)
    }
}

export default {
    createAutor,
    updateAutor,
    deleteAutor,
    getAutores,
    getAutor
}