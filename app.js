import express from 'express'
import winston from 'winston'
import ClienteRoute from './src/routes/cliente.route.js'
import VendaRoute from './src/routes/venda.route.js'
import AutorRoute from './src/routes/autor.route.js'
import LivroRoute from './src/routes/livro.route.js'

const app = express()

app.use(express.json())

// winston(log)
const { combine, timestamp, label, printf } = winston.format
const myformat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level} ${message}`
})
global.logger = winston.createLogger({
	level: 'silly',
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'livraria-log' }),
	],
	format: combine(label({ label: 'livraria-api' }), timestamp(), myformat),
})

// rotas
app.use('/cliente', ClienteRoute)
app.use('/venda', VendaRoute)
app.use('/autor', AutorRoute)
app.use('/livro', LivroRoute)

// erro padrão
app.use((err, req, res, next) => {
	logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
	res.status(400).send({ erros: err.message })
})

export default app
