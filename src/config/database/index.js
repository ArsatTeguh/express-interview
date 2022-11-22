import {Sequelize} from 'sequelize'

const db = new Sequelize('db_inter','root','',{
    dialect: 'mysql',
    host: 'localhost'
})

export default db;