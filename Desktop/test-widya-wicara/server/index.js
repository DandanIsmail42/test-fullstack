import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import db from "./configure/Database.js"
import Users from "./models/UsersModel.js"
import Product from "./models/ProductModel.js"
import cors from "cors"
import UserRoute from "./router/UsersRoute.js"
import ProductsRoute from "./router/ProductsRoute.js"


const port = process.env.PORT || 8000
dotenv.config()
const app = express()

// try{
//     await db.authenticate()
//     console.log("Connected to database successfully")
//    await Users.sync()
//     await Product.sync()
// } catch(error){
//     console.log(error)
// }
app.use(cookieParser())
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use('/api/v1', UserRoute)
app.use('/api/v1', ProductsRoute)

app.listen(port, () => console.log(`Server running in port ${port}`))