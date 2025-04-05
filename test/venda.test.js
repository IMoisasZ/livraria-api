import supertest from 'supertest'
import dotenv from 'dotenv'
dotenv.config()

const { ADMIN, PASSWORD_AUTH_PRIVATE } = process.env

const request = supertest('http://localhost:3000')
test('Criar uma venda com dados de teste.', async () => {
	const resposta = await request
		.post('/venda')
		.auth(ADMIN, PASSWORD_AUTH_PRIVATE)
	expect(resposta.status)
})
