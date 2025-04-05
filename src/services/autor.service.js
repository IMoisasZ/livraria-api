import AutorRepository from '../repositories/autor.repository.js'
import LivroRepository from '../repositories/livro.repository.js'

async function createAutor(autor) {
	try {
		return await AutorRepository.createAutor(autor)
	} catch (error) {
		throw error
	}
}

async function updateAutor(autor) {
	try {
		return await AutorRepository.updateAutor(autor)
	} catch (error) {
		throw error
	}
}

async function deleteAutor(id) {
	try {
		let livros = await LivroRepository.getLivroByAutor(id)
		console.log(livros.length)

		const { nome } = await AutorRepository.getAutor(id)
		console.log(nome)

		if (livros.length) {
			throw new Error(
				`Existem livros do autor ${nome.toUpperCase()}. Não é possivel excluir!!!`
			)
		}
		await AutorRepository.deleteAutor(id)
	} catch (error) {
		throw error
	}
}

async function getAutores() {
	try {
		return await AutorRepository.getAutores()
	} catch (error) {
		throw error
	}
}

async function getAutor(autor_id) {
	try {
		return await AutorRepository.getAutor(autor_id)
	} catch (error) {
		throw error
	}
}

export default {
	createAutor,
	updateAutor,
	deleteAutor,
	getAutores,
	getAutor,
}
