import Sequelize from 'sequelize';

const sequelize = new Sequelize("desafio","root","",
    {
        dialect: "mysql",
        define: {
            timestamps: false
        }
    }
)

export default sequelize;