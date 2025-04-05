import basicAuth from 'basic-auth'
import dotenv from 'dotenv'
dotenv.config()

const { ADMIN, PASSWORD_AUTH_PRIVATE } = process.env

async function authPrivate(req, res, next) {
	try {
		const user = basicAuth(req)

		if (!user) {
			return res.status(401).json({ error: `Dados do usuário não informado!` })
		}

		if (user.name !== ADMIN) {
			return res.status(401).json({ error: `Acesso negado!` })
		}

		if (user.pass !== PASSWORD_AUTH_PRIVATE) {
			return res.status(401).json({ error: `As senhas não conferem!` })
		}

		next()
	} catch (error) {
		return res
			.statsu(404)
			.json({ error: `Ocorreu um erro na autenticação. Tente novamente!` })
	}
}

export default authPrivate
