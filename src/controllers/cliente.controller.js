import ClienteService from '../services/cliente.service.js'

async function createCliente(req, res, next) {
	try {
		const cliente = req.body
		if (!cliente.nome) {
			return res.status(404).json({ error: 'Nome do cliente não informado!' })
		}
		if (!cliente.email) {
			return res.status(404).json({ error: 'Email cliente não informado!' })
		}
		if (!cliente.senha || !cliente.confirm_senha) {
			return res
				.status(404)
				.json({ error: 'Senha e ou confirmação da senha não inforda!' })
		}
		logger.info(`POST - /cliente`)
		return res.send(await ClienteService.createCliente(cliente))
	} catch (err) {
		next(err)
	}
}

async function updateCliente(req, res, next) {
	try {
		const cliente = req.body
		if (!cliente.nome) {
			return res.status(404).json({ error: 'Nome do cliente não informado!' })
		}
		if (!cliente.email) {
			return res.status(404).json({ error: 'Email cliente não informado!' })
		}
		logger.info(`PUT - /cliente`)
		return res.send(await ClienteService.updateCliente(cliente))
	} catch (err) {
		next(err)
	}
}

async function deleteCliente(req, res, next) {
	try {
		const { id } = req.params
		logger.info(`DELETE - /cliente/${id}`)
		return res.send(await ClienteService.deleteCliente(id))
	} catch (err) {
		next(err)
	}
}

async function getClientes(req, res, next) {
	try {
		logger.info(`GET - /cliente - Todos os clientes`)
		return res.send(await ClienteService.getClientes())
	} catch (err) {
		next(err)
	}
}

async function getCliente(req, res, next) {
	try {
		const { id } = req.params
		return res.send(await ClienteService.getCliente(id))
	} catch (err) {
		next(err)
	}
}

export default {
	createCliente,
	updateCliente,
	deleteCliente,
	getClientes,
	getCliente,
}
