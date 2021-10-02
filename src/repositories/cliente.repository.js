import ClienteModulo from '../modules/cliente.modulo.js'

async function createCliente(cliente){
    try {
        let createCli = await ClienteModulo.create(cliente)
        return await getCliente(createCli.cliente_id)
    } catch (err) {
        throw err
    }
}

async function updateCliente(cliente){
    try {
        await ClienteModulo.update(cliente, {
            where: {
                cliente_id: cliente.cliente_id
            }
        })
        return await getCliente(cliente.cliente_id)
    } catch (err) {
        throw err
    }
}

async function deleteCliente(cliente_id){
    try {
        await ClienteModulo.destroy({
            where:{
                cliente_id
            }
        })
    } catch (err) {
        throw err
    }
}

async function getClientes(){
    try {
        let cli = await ClienteModulo.findAll()
        for(let i = 0; i< cli.length; i++){
            cli[i].senha = undefined
        }
        return cli
    } catch (err) {
        throw err
    }
}


async function getCliente(cliente_id){
    try {

        let cli = await ClienteModulo.findByPk(cliente_id)
        if(!cli){
            return cli
        }
        cli.senha = undefined
        return cli
    } catch (err) {
        throw err
    }
}

export default {
    createCliente,
    updateCliente,
    deleteCliente,
    getClientes,
    getCliente
}