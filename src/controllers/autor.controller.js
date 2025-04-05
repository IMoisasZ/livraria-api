import AutorService from '../services/autor.service.js'

async function createAutor(req, res, next) {
	try {
		const autor = req.body
		if (!autor.nome) {
			return res.status(404).json({ error: 'Nome do autor não informado' })
		}
		logger.info(`POST - /autor - ${JSON.stringify(autor)}`)
		return res.send(await AutorService.createAutor(autor))
	} catch (err) {
		next(err)
	}
}

async function updateAutor(req, res, next) {
	try {
		const autor = req.body
		if (!autor.nome) {
			return res.status(404).json({ error: 'Nome do autor não informado' })
		}
		logger.info(`PUT - /autor - ${JSON.stringify(autor)}`)
		return res.send(await AutorService.updateAutor(autor))
	} catch (err) {
		next(err)
	}
}

async function deleteAutor(req, res, next) {
	try {
		const { id } = req.params

		logger.info(`DELETE - /autor/${id}`)
		return res.send(await AutorService.deleteAutor(id))
	} catch (err) {
		next(err)
	}
}

async function getAutores(req, res, next) {
	try {
		logger.info(`GET - /autor - Todos os autores `)
		return res.send(await AutorService.getAutores())
	} catch (err) {
		next(err)
	}
}

async function getAutor(req, res, next) {
	try {
		const { id } = req.params
		logger.info(`GET - /autor/${id}`)
		return res.send(await AutorService.getAutor(id))
	} catch (err) {
		next(err)
	}
}

export default {
	createAutor,
	updateAutor,
	deleteAutor,
	getAutores,
	getAutor,
}
