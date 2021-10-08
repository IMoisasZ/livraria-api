import supertest from 'supertest';

<<<<<<< HEAD
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
=======
const request = supertest('http://localhost:3000')
    test('Criar um autor com dados de teste.', async ()=>{        
       const resposta = await request.get('/autor').auth('admin','desafio-igti-nodejs')
      expect(resposta.status).toBe(200)
    })
>>>>>>> 7074e3e33eb5d39843c10e3b0482555ab5cda490
