import Sequelize from 'sequelize'
import db from '../connections/db.connection.js'
import AutorModulo from './autor.modulo.js'
import VendaModulo from './venda.modulo.js'

const Livro = db.define('livro', {
    livro_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    estoque: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    autor_id: {
        type: Sequelize.INTEGER,
        allowNull: false    
    }
}, { tableName: 'livros', underscored: true})

Livro.belongsTo(AutorModulo, { foreignKey: 'autor_id' })

export default Livro
