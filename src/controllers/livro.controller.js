import LivroService from '../services/livro.service.js'

async function createLivro(req, res, next) {
	try {
		let livro = req.body
		if (!livro.nome) {
			return res.status(404).json({ error: 'Nome do livro não informado!' })
		}

		if (!livro.valor) {
			return res.status(404).json({ error: 'Valor do livro não informado!' })
		}

		if (!livro.estoque) {
			return res.status(404).json({ error: 'Estoque do livro não informado!' })
		}

		if (!livro.autor_id) {
			return res.status(404).json({ error: 'Autor do livro não informado!' })
		}

		logger.info(`POST - /livro - ${JSON.stringify(livro)}`)
		return res.send(await LivroService.createLivro(livro))
	} catch (err) {
		next(err)
	}
}

async function updateLivro(req, res, next) {
	try {
		let livro = req.body
		if (!livro.nome) {
			return res.status(404).json({ error: 'Nome do livro não informado!' })
		}

		if (!livro.valor) {
			return res.status(404).json({ error: 'Valor do livro não informado!' })
		}

		if (!livro.estoque) {
			return res.status(404).json({ error: 'Estoque do livro não informado!' })
		}

		if (!livro.autor_id) {
			return res.status(404).json({ error: 'Autor do livro não informado!' })
		}

		logger.info(`POST - /livro - ${JSON.stringify(livro)}`)
		return res.send(await LivroService.updateLivro(livro))
	} catch (err) {
		next(err)
	}
}

async function deleteLivro(req, res, next) {
	try {
		const { id } = req.params
		logger.info(`DELETE - /livro/${id}`)
		return res.send(await LivroService.deleteLivro(id))
	} catch (err) {
		next(err)
	}
}

async function getLivro(req, res, next) {
	try {
		const { id } = req.params
		logger.info(`GET - /livro/${id}`)
		return res.send(await LivroService.getLivro(id))
	} catch (err) {
		next(err)
	}
}

async function getLivros(req, res, next) {
	try {
		const { autor_id } = req.query
		if (!autor_id) {
			logger.info(`GET - /livro - Todos os livros`)
		} else {
			logger.info(`GET - /livro?autor_id=${autor_id}`)
		}

		return res.send(await LivroService.getLivros(autor_id))
	} catch (err) {
		next(err)
	}
}

export default {
	createLivro,
	updateLivro,
	deleteLivro,
	getLivro,
	getLivros,
}
