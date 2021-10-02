import VendaRepository from '../repositories/venda.repository.js'
import LivroRepository from '../repositories/livro.repository.js'

async function createVenda(venda){
    try {
        let livro = await LivroRepository.getLivro(venda.livro_id)
        if(!livro.estoque){
            throw new Error(`Não há estoque disposivel para o livro de ID ${venda.livro_id}!`)
        }
        let estoque = parseInt(livro.estoque) - 1
        LivroRepository.updateEstoqueLivro(venda.livro_id, estoque)
        venda.valor = livro.valor
        return await VendaRepository.createVenda(venda)
    } catch (err) {
        throw err
    }
}

async function getVenda(venda_id){
    return await VendaRepository.getVenda(venda_id)
}

async function getVendas(cliente_id, livro_id, autor_id){
    if(cliente_id){
        return await VendaRepository.getVendaByClienteId(cliente_id)
    }

    if(livro_id){
        return await VendaRepository.getVendaByLivroId(livro_id)
    }

    if(autor_id){
        return await VendaRepository.getVendaByAutorId(autor_id)
    }

    return await VendaRepository.getVendas()
}

export default {
    createVenda,
    getVenda,
    getVendas
}