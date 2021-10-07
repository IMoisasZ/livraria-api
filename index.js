import express from 'express'
import winston from 'winston'
import ClienteRoute from './src/routes/cliente.route.js'
import VendaRoute from './src/routes/venda.route.js'
import AutorRoute from './src/routes/autor.route.js'
import LivroRoute from './src/routes/livro.route.js'
import LivroInfoRoute from './src/routes/livroInfo.route.js'

const app = express()
const port = 3000

app.use(express.json())

// winston(log)
const { combine, timestamp, label, printf} = winston.format;
const myformat = printf (({ level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} ${message}`;
})
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "livraria-log" })
    ],
    format: combine(
        label({ label: "livraria-api" }),
        timestamp(),
        myformat
    )
});

// rotas
app.use('/cliente',authorize(
    app.use(basicAuth({
        authorizer: async (username, password) => {
            // Obs: Usuário e senha estão "hard coded", apenas para facilitar 
            // o entendimento. O ideal nesse ponto é buscar as informações do usuário 
            // de um banco de dados, servidor de autorização, etc.
            if(username === 'adim'){
                const userMatches = basicAuth.safeCompare(username, 'admin');
                const pwdMatches = basicAuth.safeCompare(password, 'admin');
                return userMatches && pwdMatches
            }
    
            let cliente = await ClienteRepository.getClienteByEmail(username)
            const user2Matches = basicAuth.safeCompare(username, cliente.email );
            const pwd2Matches = basicAuth.safeCompare(password, cliente.senha);
    
            return user2Matches && pwd2Matches;
        }
    }))
    
), ClienteRoute)
app.use('/venda', VendaRoute)
app.use('/autor', authorize(
    app.use(basicAuth({
        authorizer: async (username, password) => {
            // Obs: Usuário e senha estão "hard coded", apenas para facilitar 
            // o entendimento. O ideal nesse ponto é buscar as informações do usuário 
            // de um banco de dados, servidor de autorização, etc.
            if(username === 'adim'){
                const userMatches = basicAuth.safeCompare(username, 'admin');
                const pwdMatches = basicAuth.safeCompare(password, 'admin');
                return userMatches && pwdMatches
            }
    
            let cliente = await ClienteRepository.getClienteByEmail(username)
            const user2Matches = basicAuth.safeCompare(username, cliente.email );
            const pwd2Matches = basicAuth.safeCompare(password, cliente.senha);
    
            return user2Matches && pwd2Matches;
        }
    }))
    
),AutorRoute)
app.use('/livro', LivroRoute)
app.use('/livroInfo', LivroInfoRoute)

app.listen(port, ()=>{
    console.log(`MODULO DESAFIO RODANDO NA PORTA ${port}`);
})


// erro padrão
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ erros: err.message })
})

