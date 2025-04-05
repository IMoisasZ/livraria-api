import { Cliente } from '../modules/index.js'

async function createCliente(cliente) {
	try {
		const { id } = await Cliente.create(cliente)
		return await getCliente(id)
	} catch (err) {
		throw err
	}
}

async function updateCliente(cliente) {
	try {
		await Cliente.update(cliente, {
			where: {
				id: cliente.id,
			},
		})
		return await getCliente(cliente.id)
	} catch (err) {
		throw err
	}
}

async function deleteCliente(id) {
	try {
		await Cliente.destroy({
			where: {
				id,
			},
		})
	} catch (err) {
		throw err
	}
}

async function getClientes() {
	try {
		return await Cliente.findAll({
			attributes: [
				'id',
				'nome',
				'email',
				'telefone',
				'endereco',
				'created_at',
				'updated_at',
			],
		})
	} catch (err) {
		throw err
	}
}

async function getCliente(id) {
	try {
		return await Cliente.findByPk(id, {
			attributes: [
				'id',
				'nome',
				'email',
				'telefone',
				'endereco',
				'created_at',
				'updated_at',
			],
		})
	} catch (err) {
		throw err
	}
}

async function getClienteByEmail(email) {
	try {
		return await Cliente.findOne({
			where: {
				email,
			},
		})
	} catch (err) {
		throw err
	}
}

export default {
	createCliente,
	updateCliente,
	deleteCliente,
	getClientes,
	getCliente,
	getClienteByEmail,
}
