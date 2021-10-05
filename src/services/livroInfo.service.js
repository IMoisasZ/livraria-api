import livroInfoRepository from '../repositories/livroInfo.repository.js'
import LivroInfoRepository from '../repositories/livroInfo.repository.js'

async function createLivroInfo(livroInfo){
    return await LivroInfoRepository.createLivroInfo(livroInfo)
}

async function updateLivroInfo(livroInfo){
    return await LivroInfoRepository.updateLivroInfo(livroInfo)
}

async function deleteLivroInfo(livro_id){
    await LivroInfoRepository.deleteLivroInfo(livro_id)
}

async function getLivroInfo(livro_id){
    return await LivroInfoRepository.getLivroInfo(livro_id)
}

async function createAvaliacao(livro_id, avaliacao){
    return await LivroInfoRepository.createAvaliacao(livro_id, avaliacao)
}

async function deleteAvaliacao(livro_id, index){
    return await LivroInfoRepository.deleteAvaliacao(livro_id, index)
}

export default {
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo,
    getLivroInfo,
    createAvaliacao,
    deleteAvaliacao
}