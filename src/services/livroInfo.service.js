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

export default {
    createLivroInfo,
    updateLivroInfo,
    deleteLivroInfo
}