import Sequelize from 'sequelize'
import db from '../connections/db.connection.js'
import ClienteModulo from '../modules/cliente.modulo.js'
import LivroModulo from '../modules/livro.modulo.js'
import livroRepository from '../repositories/livro.repository.js'

const Venda = db.define('venda',{
    venda_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    livro_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { tableName: 'vendas', underscored: true })

Venda.belongsTo(ClienteModulo, { foreignKey: 'cliente_id' })
Venda.hasMany(LivroModulo, { foreignKey: 'livro_id', as: 'vendas'} )
export default Venda