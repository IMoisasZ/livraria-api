import ClienteService from '../services/cliente.service.js'

async function createCliente(req, res, next){
    try {
        let cliente = req.body
        res.status(200).send(JSON.stringify(await ClienteService.createCliente(cliente)))
    } catch (err) {
        next(err)
    }
}

async function updateCliente(req, res, next){
    try {
        let cliente = req.body
        res. send(await ClienteService.updateCliente(cliente))
    } catch (err) {
        next(err)
    }
}

async function deleteCliente(req, res, next){
    try {
        await ClienteService.deleteCliente(req.params.cliente_id)
        res.status(200).send(`O cliente com ID ${req.params.cliente_id} foi deletado com sucesso!`)
    } catch (err) {
        next(err)
    }
}

async function getClientes(req, res, next){
    try {
        res.send(await ClienteService.getClientes())       
    } catch (err) {
        next(err)
    }
}

async function getCliente(req, res, next){
    try {
        res.send(await ClienteService.getCliente(req.params.cliente_id))
    } catch (err) {
        next(err)
    }
}

export default {
    createCliente,
    updateCliente,
    deleteCliente,
    getClientes,
    getCliente
}