import { INTEGER, STRING } from 'sequelize'
import db from '../connections/db.connection.js'

const Autor = db.define(
	'autor',
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
		telefone: {
			type: STRING,
			allowNull: false,
		},
	},
	{ tableName: 'autores', underscored: true }
)

export default Autor
