import VendaService from '../services/venda.service.js'
import basicAuth from 'basic-auth'

async function createVenda(req, res, next){
    try {
        let clienteLogado = basicAuth(req)
        let venda = req.body
        if(!venda.cliente_id){
            throw new Error(`O ID do cliente é obrigatório!`)
        }
        res. send(await VendaService.createVenda(venda, clienteLogado.name))
    } catch (err) {
        next(err)
    }
}

async function getVenda(req, res, next){
    try {
        let clienteLogado = basicAuth(req)
        res.send(await VendaService.getVenda(req.params.venda_id, clienteLogado))
    } catch (err) {
        next(err)
    }
}

async function getVendas(req, res, next){
    try {
        let clienteLogado = basicAuth(req)
        res.send(await VendaService.getVendas(req.query.cliente_id, req.query.livro_id, req.query.autor_id, clienteLogado.name))
    } catch (err) {
        next(err)
    }
}

export default {
    createVenda,
    getVenda,
    getVendas
}