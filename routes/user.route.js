import express from 'express';
import { createUserController } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/', (req, res) => res.end('Get all users'))
userRouter.post('/', createUserController);

export { userRouter };
