import AutorModulo from '../modules/autor.modulo.js'

async function createAutor(autor){
    try {
        let a = await AutorModulo.create(autor)
        return await getAutor(a.autor_id)
    } catch (err) {
        throw err
    }
}

async function updateAutor(autor){
    try {
        await AutorModulo.update(autor, {
            where: {
                autor_id: autor.autor_id
            }
        })
        return await getAutor(autor.autor_id)
    } catch (err) {
        throw err
    }
}

async function deleteAutor(autor_id){
    try {
        await AutorModulo.destroy({
            where:{
                autor_id
            }
        })
    } catch (err) {
        throw err
    }
}

async function getAutores(){
    try {
        return await AutorModulo.findAll()
    } catch (err) {
        throw err
    }
}

async function getAutor(autor_id){
    try {
        return await AutorModulo.findByPk(autor_id)
    } catch (err) {
        throw err
    }
}

export default {
    createAutor,
    updateAutor,
    deleteAutor,
    getAutores,
    getAutor
}
