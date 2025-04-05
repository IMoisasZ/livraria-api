import Autor from './autor.modulo.js'
import Cliente from './cliente.modulo.js'
import Livro from './livro.modulo.js'
import Venda from './venda.modulo.js'

async function syncModels() {
	await Autor.sync()
	await Livro.sync()
	await Cliente.sync()
	await Venda.sync()
}

syncModels()

export { Autor, Cliente, Livro, Venda }
