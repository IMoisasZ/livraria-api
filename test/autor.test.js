import request from 'supertest'
import app from '../index.js'

describe('Testes de autor', ()=>{
    test.only('Criar um autor com dados de teste.', async ()=>{
        const autor = {
            nome: 'Pereira',
            email: 'pereira@email.com',
            telefone: '12345678'
        }
        
       const res = await request(app)
      .post('/autor')
      .send(autor)
        
      expect(res.status).toBe(201)

      const autorCadastrado = await request(app)
      .get('/autor/:autor_id')
      .send(res.autor_id)
        console.log(res);
      expect(autorCadastrado.email).toBe(autor.email)

    })
})