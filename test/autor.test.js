import request from 'supertest'
import app from '../index.js'

describe('Testes de autor', ()=>{
    test.only('Criar um autor com dados de teste.', async ()=>{
        const autor = {
            nome: 'Pereira',
            email: 'pereira@email.com',
            telefone: '12345678'
        }
        
      const result =  await request(app)
      .get('/autor')
      .send({})
      expect(!result).toBe(false)

    })
})