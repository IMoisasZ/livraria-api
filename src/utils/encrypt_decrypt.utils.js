import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

const { SALT_HASH } = process.env
console.log(typeof SALT_HASH)

export function encrypt(password) {
	return bcrypt.hashSync(password, Number(SALT_HASH))
}

export async function decrypt(password, passwordHashed) {
	try {
		return await bcrypt.compare(password, passwordHashed)
	} catch (error) {
		console.error('Erro ao comparar senhas:', error)
		throw error
	}
}
