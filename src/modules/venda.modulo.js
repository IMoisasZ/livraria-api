import { INTEGER, DATE, STRING, DECIMAL } from 'sequelize'
import db from '../connections/db.connection.js'
import { Cliente, Livro } from './index.js'

const Venda = db.define(
	'venda',
	{
		id: {
			type: INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		data: {
			type: DATE,
			allowNull: false,
		},
		cliente_id: {
			type: INTEGER,
			allowNull: false,
		},
		livro_id: {
			type: INTEGER,
			allowNull: false,
		},
		valor: {
			type: DECIMAL(10, 2),
			allowNull: false,
		},
	},
	{ tableName: 'vendas', underscored: true }
)

Venda.belongsTo(Cliente, { foreignKey: 'cliente_id' })
Cliente.hasMany(Venda, { foreignKey: 'cliente_id' })

Venda.belongsTo(Livro, { foreignKey: 'livro_id' })
Livro.hasMany(Venda, { foreignKey: 'livro_id' })

export default Venda
