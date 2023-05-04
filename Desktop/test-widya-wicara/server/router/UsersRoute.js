import express from "express"
import { getUsers, getUsersById, Login, Logout, Regist } from "../controllers/UsersController.js"
import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken } from "../controllers/RefreshToken.js"
const router = express.Router()

router.get('/users', verifyToken,  getUsers)
router.get('/users/:id', verifyToken,  getUsersById)
router.post('/users/regist', Regist)
router.post('/users/login', Login)
router.get('/users/token', refreshToken)
router.delete('/users/logout', Logout)

export default router

