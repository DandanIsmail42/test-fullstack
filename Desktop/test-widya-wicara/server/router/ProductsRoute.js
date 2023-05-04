import express from "express"
import { getProducts, createProducts, deletedProducts, updateProducts } from "../controllers/ProductsController.js"
import { verifyToken } from "../middleware/VerifyToken.js"
const router = express.Router()

router.get('/products', verifyToken, getProducts)
router.post('/products/add', verifyToken, createProducts)
router.patch('/products/update/:id', verifyToken, updateProducts)
router.delete('/products/delete/:id', verifyToken, deletedProducts)

export default router

