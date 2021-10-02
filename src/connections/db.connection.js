import Sequelize from 'sequelize';

const sequelize = new Sequelize("livraria_apinp","root","",
    {
        dialect: "mysql",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;