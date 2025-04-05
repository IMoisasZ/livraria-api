import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const { DATABASE, HOST, USER, PASSWORD, DIALECT } = process.env

const dbConnection = new Sequelize(DATABASE, USER, PASSWORD, {
	host: HOST,
	dialect: DIALECT,
	define: {
		timestamps: true,
	},
})

export default dbConnection
