import LivroRepository from '../repositories/livro.repository.js'
import VendaRepository from '../repositories/venda.repository.js'

async function createLivro(livro){
    return await LivroRepository.createLivro(livro)
}

async function updateLivro(livro){
    return await LivroRepository.updateLivro(livro)
}

async function deleteLivro(livro_id){
    let livros = await VendaRepository.getVendaByLivroId(livro_id)
    if(livros.length){
        throw new Error(`Existe vendas para o livro de ID ${livro_id}. Não é possivel excluir!`)
    }
    await LivroRepository.deleteLivro(livro_id)
}

async function getLivro(livro_id){
    return await LivroRepository.getLivro(livro_id)
}

async function getLivros(autor_id){
    if(autor_id){
        return await LivroRepository.getLivroByAutor(autor_id)
    }
    return LivroRepository.getLivros()
}

export default {
    createLivro,
    updateLivro,
    deleteLivro,
    getLivro,
    getLivros
}