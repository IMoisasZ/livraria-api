import LivroRepository from '../repositories/livro.repository.js'
import VendaRepository from '../repositories/venda.repository.js'

async function createLivro(livro) {
	try {
		return await LivroRepository.createLivro(livro)
	} catch (error) {
		throw error
	}
}

async function updateLivro(livro) {
	try {
		return await LivroRepository.updateLivro(livro)
	} catch (error) {
		throw error
	}
}

async function deleteLivro(id) {
	try {
		let livros = await VendaRepository.getVendaByLivroId(id)
		const { nome } = await LivroRepository.getLivro(id)
		if (livros.length) {
			throw new Error(
				`Existe vendas para o livro ${nome.toUpperCase()}. Não é possivel excluir!`
			)
		}
		return await LivroRepository.deleteLivro(id)
	} catch (error) {
		throw error
	}
}

async function getLivro(id) {
	try {
		return await LivroRepository.getLivro(id)
	} catch (error) {
		throw error
	}
}

async function getLivros(autor_id) {
	try {
		if (autor_id) {
			return await LivroRepository.getLivroByAutor(autor_id)
		}
		return LivroRepository.getLivros()
	} catch (error) {
		throw error
	}
}

export default {
	createLivro,
	updateLivro,
	deleteLivro,
	getLivro,
	getLivros,
}
