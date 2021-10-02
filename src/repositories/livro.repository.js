import LivroModulo from '../modules/livro.modulo.js'

async function createLivro(livro){
    try {
        let l = await LivroModulo.create(livro)
        return await getLivro(l.livro_id)
    } catch (err) {
        throw err
    }
}

async function updateLivro(livro){
    try {
        await LivroModulo.update({
            valor: livro.valor
            },{
            where:{
                livro_id: livro.livro_id
            }
        })
        return await getLivro(livro.livro_id)
    } catch (err) {
        throw err
    }
}

async function deleteLivro(livro_id){
    try {
        await LivroModulo.destroy({
            where:{
                livro_id
            }
        })
    } catch (err) {
        throw err
    }
}

async function getLivro(livro_id){
    try {
        return await LivroModulo.findByPk(livro_id)
    } catch (err) {
        throw err
    }
}

async function getLivros(){
    try {
        return LivroModulo.findAll()
    } catch (err) {
        throw err
    }
}

async function getLivroByAutor(autor_id){
    try {
        return await LivroModulo.findAll({
            where:{
                autor_id
            }
        })
    } catch (err) {
        throw err
    }
}

async function updateEstoqueLivro(livro_id, estoque){
    try {
        console.log(estoque);
        return await LivroModulo.update({
            estoque
        },
        {
            where:{
                livro_id
            }
        })
    } catch (err) {
        throw err
    }
}

export default {
    createLivro,
    updateLivro,
    deleteLivro,
    getLivro,
    getLivros,
    getLivroByAutor,
    updateEstoqueLivro
}