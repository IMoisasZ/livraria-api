import basicAuth from 'basic-auth'
import ClienteRepository from '../repositories/cliente.repository.js'
import { decrypt } from '../utils/encrypt_decrypt.utils.js'
import dotenv from 'dotenv'
dotenv.config()

const { ADMIN, PASSWORD_AUTH_PRIVATE } = process.env

const authPublic = async function (req, res, next) {
	const user = basicAuth(req)

	if (!user) {
		return res.status(401).json({ error: `Dados do usuário não informado!` })
	}

	const cliente = await ClienteRepository.getClienteByEmail(user.name)

	if (!cliente) {
		return res.status(401).json({ error: `Usuário incorreto ou não existe!` })
	}

	if (user.name === ADMIN) {
		if (user.pass === PASSWORD_AUTH_PRIVATE) {
			next()
		} else {
			return res.status(401).json({ error: 'Denied' })
		}
	}

	if (!user.pass) {
		return res.status(401).json({ error: 'Senha não informada!' })
	}

	const password = cliente.senha

	const match = await decrypt(user.pass, password)

	if (!match) {
		return res.status(401).json({ error: 'Senha incorreta!' })
	}

	next()
}
export default authPublic
