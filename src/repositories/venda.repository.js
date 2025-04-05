import { Venda, Livro, Cliente, Autor } from '../modules/index.js'

async function createVenda(venda) {
	try {
		const { id } = await Venda.create(venda)
		return await getVenda(id)
	} catch (err) {
		throw err
	}
}

async function getVenda(id) {
	try {
		return Venda.findByPk(id, {
			include: [
				{
					model: Cliente,
					attributes: ['nome', 'email'],
				},
				{
					model: Livro,
					attributes: ['nome'],
					include: {
						model: Autor,
						attributes: ['nome', 'email'],
					},
				},
			],
		})
	} catch (err) {
		throw err
	}
}

async function getVendas(filtros) {
	try {
		return Venda.findAll({
			where:
				filtros.id === 1
					? { cliente_id: Number(filtros.cliente_id) }
					: filtros.id === 2
					? { livro_id: Number(filtros.livro_id) }
					: filtros.id === 3
					? {
							cliente_id: Number(filtros.cliente_id),
							livro_id: Number(filtros.livro_id),
					  }
					: {},
			include: [
				{
					model: Cliente,
					attributes: ['nome', 'email'],
				},
				{
					model: Livro,
					attributes: ['nome'],
					include: {
						model: Autor,
						attributes: ['nome', 'email'],
					},
				},
			],
		})
	} catch (err) {
		throw err
	}
}

export default {
	createVenda,
	getVenda,
	getVendas,
}
