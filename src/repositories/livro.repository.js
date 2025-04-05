import { Livro, Autor } from '../modules/index.js'

async function createLivro(livro) {
	try {
		const { id } = await Livro.create(livro)
		return await getLivro(id)
	} catch (err) {
		throw err
	}
}

async function updateLivro(livro) {
	try {
		await Livro.update(livro, {
			where: {
				id: livro.id,
			},
		})
		return await getLivro(livro.id)
	} catch (err) {
		throw err
	}
}

async function deleteLivro(id) {
	try {
		await Livro.destroy({
			where: {
				id,
			},
		})
	} catch (err) {
		throw err
	}
}

async function getLivro(id) {
	try {
		return await Livro.findByPk(id, {
			include: {
				model: Autor,
			},
		})
	} catch (err) {
		throw err
	}
}

async function getLivros() {
	try {
		return Livro.findAll({
			include: {
				model: Autor,
			},
		})
	} catch (err) {
		throw err
	}
}

async function getLivroByAutor(autor_id) {
	try {
		return await Livro.findAll({
			where: {
				autor_id,
			},
			include: {
				model: Autor,
			},
		})
	} catch (err) {
		throw err
	}
}

async function updateEstoqueLivro(id, estoque) {
	try {
		return await Livro.update(
			{
				estoque,
			},
			{
				where: {
					id,
				},
			}
		)
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
	updateEstoqueLivro,
}
