import VendaService from '../services/venda.service.js'

async function createVenda(req, res, next){
    try {
        let venda = req.body
        res. send(await VendaService.createVenda(venda))
    } catch (err) {
        next(err)
    }
}

async function getVenda(req, res, next){
    try {
        res.send(await VendaService.getVenda(req.params.venda_id))
    } catch (err) {
        next(err)
    }
}

async function getVendas(req, res, next){
    try {
        res.send(await VendaService.getVendas(req.query.cliente_id, req.query.livro_id, req.query.autor_id))
    } catch (err) {
        next(err)
    }
}

export default {
    createVenda,
    getVenda,
    getVendas
}