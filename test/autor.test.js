import supertest from 'supertest';

const request = supertest('http://localhost:3000')
    test('Criar um autor com dados de teste.', async ()=>{        
       const resposta = await request.get('/autor')
      expect(resposta.status).toBe(200)
    })
