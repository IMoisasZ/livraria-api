import AutorRepository from '../repositories/autor.repository.js'
import LivroRepository from '../repositories/livro.repository.js'

async function createAutor(autor){
    return await AutorRepository.createAutor(autor)
}

async function updateAutor(autor){
    return await AutorRepository.updateAutor(autor)
}

async function deleteAutor(autor_id){
    try {
        let livros = await LivroRepository.getLivroByAutor(autor_id)
        if(livros.length){
            throw new Error(`Existem livros do autor de ID ${autor_id}. Não é possivel excluir!!!`)
        }
        await AutorRepository.deleteAutor(autor_id)
    } catch (err) {
        throw err
    }
}

async function getAutores(){
    return AutorRepository.getAutores()
}

async function getAutor(autor_id){
    return AutorRepository.getAutor(autor_id)
}

export default {
    createAutor,
    updateAutor,
    deleteAutor,
    getAutores,
    getAutor
}