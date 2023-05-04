import { Sequelize } from "sequelize";
import db from "../configure/Database.js";

const {DataTypes} = Sequelize
const Product = db.define('product', {
    Product_name: {
        type: DataTypes.STRING
    },
    Price: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
})


export default Product
