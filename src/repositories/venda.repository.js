import VendaModulo from '../modules/venda.modulo.js'
import LivroModulo from '../modules/livro.modulo.js'
import AutorModulo from '../modules/autor.modulo.js'

async function createVenda(venda){
    try {
        let v = await VendaModulo.create(venda)
        return await getVenda(v.venda_id)

    } catch (err) {
        throw err
    }
}

async function getVenda(venda_id){
    try {
        return VendaModulo.findByPk(venda_id)
    } catch (err) {
        throw err
    }
}

async function getVendas(){
    try {
        return VendaModulo.findAll()
    } catch (err) {
        throw err
    }
}

async function getVendaByClienteId(cliente_id){
    try {
        return VendaModulo.findAll({
            where:{
                cliente_id
            }
        })
    } catch (err) {
        throw err
    }
}

async function getVendaByLivroId(livro_id){
    try {
        return await VendaModulo.findAll({
            where:{
                livro_id
            }
        })
    } catch (err) {
        throw err
    }
}

async function getVendaByAutorId(autor_id){
    try {
        return await VendaModulo.findAll({
            include:[
                {
                    model: LivroModulo,
                    as: 'vendas',
                    foreignKey: 'livro_id',
                        where:{
                            autor_id
                        }
                }
            ]
        })
    } catch (err) {
        throw err
    }
}

export default {
    createVenda,
    getVenda,
    getVendas,
    getVendaByClienteId,
    getVendaByLivroId,
    getVendaByAutorId
}