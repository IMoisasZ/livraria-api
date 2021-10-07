import basicAuth from 'basic-auth'
import ClienteRepository from '../repositories/cliente.repository.js'


const authPublic = async function (req, res, next){
    const user = basicAuth(req)
    if(user.name === 'admin'){
        if(user.pass === 'desafio-igti-nodejs'){
            next()
        }else{
            res.statusCode = 401
            res.end('Denied')
        }
    }else{
        const cliente = await ClienteRepository.getClienteByEmail(user.name)
        if(cliente){
            const username = cliente.email
            const password = cliente.senha
    
            if(user && user.name.toLowerCase() === username.toLowerCase() && user.pass === password){
                next()
            }else{
                res.statusCode = 401
                res.end('Denied')
            }
        }else{
            res.statusCode = 401
            res.end('Denied')
        }
    }
    
}
export default authPublic