import { Sequelize } from "sequelize";

const db = new Sequelize('freedb_crud-test', 'freedb_dandan-ismail', 'hz#mwgCj7Vs&$Z8', {
    host: 'sql.freedb.tech',
    dialect: 'mysql'
})

export default db