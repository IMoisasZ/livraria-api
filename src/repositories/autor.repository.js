import { Autor } from '../modules/index.js'

async function createAutor(autor) {
	try {
		const { id } = await Autor.create(autor)
		return await getAutor(id)
	} catch (err) {
		throw err
	}
}

async function updateAutor(autor) {
	try {
		await Autor.update(autor, {
			where: {
				id: autor.id,
			},
		})
		return await getAutor(autor.id)
	} catch (err) {
		throw err
	}
}

async function deleteAutor(id) {
	try {
		await Autor.destroy({
			where: {
				id,
			},
		})
	} catch (err) {
		throw err
	}
}

async function getAutores() {
	try {
		return await Autor.findAll()
	} catch (err) {
		throw err
	}
}

async function getAutor(id) {
	try {
		return await Autor.findByPk(id)
	} catch (err) {
		throw err
	}
}

export default {
	createAutor,
	updateAutor,
	deleteAutor,
	getAutores,
	getAutor,
}
