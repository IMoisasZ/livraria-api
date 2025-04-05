import VendaRepository from '../repositories/venda.repository.js'
import LivroRepository from '../repositories/livro.repository.js'

async function createVenda(venda) {
	try {
		// verifica se há estoque do livro
		let livro = await LivroRepository.getLivro(venda.livro_id)
		if (!livro.estoque || livro.estoque === 0) {
			throw new Error(
				`Não há estoque disposivel para o livro de ID ${venda.livro_id}!`
			)
		}

		// inclui nos dados da vend o valor do livro
		venda.valor = livro.valor

		// executa a venda
		const response = await VendaRepository.createVenda(venda)

		// baixa do estoque
		let estoque = parseInt(livro.estoque) - 1

		// função para atualizar o estoque
		LivroRepository.updateEstoqueLivro(venda.livro_id, estoque)

		// retorna os dados da venda execudata
		return response
	} catch (err) {
		throw err
	}
}

async function getVenda(id) {
	try {
		return await VendaRepository.getVenda(id)
	} catch (error) {
		throw error
	}
}

async function getVendas(query) {
	try {
		// desestruturando os filtros
		const { cliente_id, livro_id } = query

		/**
		 * criando a logica para os filtros, onde:
		 * 1 = filtro apenas do cliente
		 * 2 = filtro apenas do livro
		 * 3 = filtro do cliente e do livro
		 * 4 = filtrar todas as vendas
		 */

		let filtros = {}
		if (cliente_id) {
			filtros.id = 1
			filtros.cliente_id = cliente_id
		}

		if (livro_id) {
			if (!filtros.cliente_id) {
				filtros.id = 2
				filtros.livro_id = livro_id
			} else {
				filtros.id = 3
				filtros.cliente_id = cliente_id
				filtros.livro_id = livro_id
			}
		}

		if (!filtros) {
			filtros.id = 0
		}

		return await VendaRepository.getVendas(filtros)
	} catch (error) {
		throw error
	}
}

export default {
	createVenda,
	getVenda,
	getVendas,
}
