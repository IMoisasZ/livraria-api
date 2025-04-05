import VendaService from '../services/venda.service.js'

async function createVenda(req, res, next) {
	try {
		let venda = req.body
		if (!venda.data) {
			throw new Error(`Data da venda não informada!`)
		}
		if (!venda.cliente_id) {
			throw new Error(`Cliente não informado!`)
		}
		if (!venda.livro_id) {
			throw new Error(`Livro não informado!`)
		}
		logger.info(`POST - /venda - ${JSON.stringify(venda)}`)
		return res.send(await VendaService.createVenda(venda))
	} catch (err) {
		next(err)
	}
}

async function getVenda(req, res, next) {
	try {
		const { id } = req.params
		logger.info(`GET - /venda/${id}`)
		return res.send(await VendaService.getVenda(id))
	} catch (err) {
		next(err)
	}
}

async function getVendas(req, res, next) {
	try {
		const { cliente_id, livro_id } = req.query
		if (cliente_id || livro_id) {
			logger.info(`GET - /vendas?cliente_id=${cliente_id}&livro_id=${livro_id}`)
		} else {
			logger.info(`GET - /vendas - Todas as vendas`)
		}
		return res.send(await VendaService.getVendas(req.query))
	} catch (err) {
		next(err)
	}
}

export default {
	createVenda,
	getVenda,
	getVendas,
}
