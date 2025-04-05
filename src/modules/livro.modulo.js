import { INTEGER, STRING, DECIMAL } from 'sequelize'
import db from '../connections/db.connection.js'
import { Autor } from './index.js'

const Livro = db.define(
	'livro',
	{
		id: {
			type: INTEGER,
			allowNull: true,
			autoIncrement: true,
			primaryKey: true,
		},
		nome: {
			type: STRING,
			allowNull: false,
		},
		valor: {
			type: DECIMAL(10, 2),
			allowNull: false,
		},
		estoque: {
			type: INTEGER,
			allowNull: false,
		},
		autor_id: {
			type: INTEGER,
			allowNull: false,
		},
	},
	{ tableName: 'livros', underscored: true }
)

Livro.belongsTo(Autor, {
	foreignKey: 'autor_id',
	onDelete: 'CASCADE',
	onUpdate: 'CASCADE',
})

Autor.hasMany(Livro, {
	foreignKey: 'autor_id',
	onDelete: 'CASCADE',
	onUpdate: 'CASCADE',
})

export default Livro
