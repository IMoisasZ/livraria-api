import Sequelize from 'Sequelize'
import db from '../connections/db.connection.js'

const Autor = db.define('autor', {
    autor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
},{ tableName: 'autores', underscored: true})

export default Autor