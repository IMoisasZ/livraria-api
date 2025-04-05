import app from './app.js'
import dotenv from 'dotenv'
import dbConnection from './src/connections/db.connection.js'

dotenv.config()

const { PORT, PORT_SECONDARY } = process.env

try {
	app.listen(PORT || PORT_SECONDARY, () => {
		console.log(`MODULO DESAFIO RODANDO NA PORTA ${PORT || PORT_SECONDARY}`)
	})
	await dbConnection.authenticate()
	console.log('Connection has been established successfully.')
} catch (error) {
	console.error('Unable to connect to the database:', error)
}
