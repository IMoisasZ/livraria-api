import express from 'express'
import basicAuth from 'express-basic-auth'
import ClienteRepository from '../repositories/cliente.repository.js'
const app = express()
function athor(req, res, next){
    app.use(basicAuth({authorizer: async (username, password) => {
            let cliente = await ClienteRepository.getClienteByEmail(username)
            const user2Matches = basicAuth.safeCompare(username, cliente.email );
            const pwd2Matches = basicAuth.safeCompare(password, cliente.senha);
    
            const result =  user2Matches && pwd2Matches;
            if(result){
                console.log(result);
                next()
            }
        }
    }))
}

export default athor