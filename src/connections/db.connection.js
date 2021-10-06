import Sequelize from 'sequelize';

const sequelize = new Sequelize("livraria_api","root","",
    {
        dialect: "mysql",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;