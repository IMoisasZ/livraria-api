import { INTEGER, STRING } from 'sequelize'
import db from '../connections/db.connection.js'

const Cliente = db.define(
	'cliente',
	{
		id: {
			type: INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		nome: {
			type: STRING,
			allowNull: false,
		},
		email: {
			type: STRING,
			allowNull: false,
		},
		senha: {
			type: STRING,
			allowNull: false,
		},
		telefone: {
			type: STRING,
			allowNull: false,
		},
		endereco: {
			type: STRING,
			allowNull: false,
		},
	},
	{ tableName: 'clientes', underscored: true }
)

export default Cliente
