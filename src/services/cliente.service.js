import ClienteRepository from '../repositories/cliente.repository.js'
import VendaRepository from '../repositories/venda.repository.js'
import { encrypt } from '../utils/encrypt_decrypt.utils.js'

async function createCliente(cliente) {
	try {
		cliente.senha = encrypt(cliente.senha)
		return await ClienteRepository.createCliente(cliente)
	} catch (error) {
		throw error
	}
}

async function updateCliente(cliente) {
	try {
		delete cliente.senha
		return await ClienteRepository.updateCliente(cliente)
	} catch (error) {
		throw error
	}
}

async function deleteCliente(id) {
	try {
		let vendas = await VendaRepository.getVendaByClienteId(id)
		const { nome } = await ClienteRepository.getCliente(id)
		if (vendas.length) {
			throw new Error(
				`Existe venda(s) para o cliente ${nome.toUpperCase()}. Não é possivel excluir!!!`
			)
		}
		return await ClienteRepository.deleteCliente(id)
	} catch (error) {
		throw error
	}
}

async function getClientes() {
	try {
		return await ClienteRepository.getClientes()
	} catch (error) {
		throw error
	}
}

async function getCliente(id) {
	try {
		let cliente = await ClienteRepository.getCliente(id)
		if (!cliente) {
			throw new Error(`Não existe cliente com o ID ${id}!`)
		}
		return await ClienteRepository.getCliente(id)
	} catch (error) {
		throw error
	}
}

export default {
	createCliente,
	updateCliente,
	deleteCliente,
	getClientes,
	getCliente,
}
