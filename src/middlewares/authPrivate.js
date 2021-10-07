import basicAuth from 'basic-auth'

async function authPrivate(req,res,next){
    const user = basicAuth(req)
    if(user && user.name === 'admin' && user.pass === 'desafio-igti-nodejs'){
        next()
    }else{
        res.statusCode = 401
        res.end('Denied')
    }
}

export default authPrivate