import ClienteRepository from '../repositories/cliente.repository.js'
import VendaRepository from '../repositories/venda.repository.js'


async function createCliente(cliente){
    return await ClienteRepository.createCliente(cliente)
}

async function updateCliente(cliente,clienteLogado){
    if(cliente.email !== clienteLogado){
        throw new Error(`Você não tem acesso para alterar os dados desse cliente!`)
    }
    return await ClienteRepository.updateCliente(cliente)
}

async function deleteCliente(cliente_id){
    try {
        let vendas = await VendaRepository.getVendaByClienteId(cliente_id)
        if(vendas.length){
            throw new Error(`Existe venda(s) para o cliente de ID ${cliente_id}. Não é possivel excluir!!!`)
        }    
        return await ClienteRepository.deleteCliente(cliente_id)
    } catch (err) {
        throw err
    }
}

async function getClientes(){
    return await ClienteRepository.getClientes()
}

async function getCliente(cliente_id){
    let cliente = await ClienteRepository.getCliente(cliente_id)
    if(!cliente){
        throw new Error(`Não existe cliente com o ID ${cliente_id}!`)
    }
    return await ClienteRepository.getCliente(cliente_id)
}


export default {
    createCliente,
    updateCliente,
    deleteCliente,
    getClientes,
    getCliente
}