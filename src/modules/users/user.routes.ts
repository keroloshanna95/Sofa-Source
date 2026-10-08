import { Router } from 'express';
import { getUsersHandler, createUserHandler } from './user.controller';

const userRouter = Router();



userRouter.get('/users', getUsersHandler);
// userRouter.get('/users/:id', getUserByEmailHandler);
userRouter.post('/users', createUserHandler);
// userRouter.put('/users/:id', updateUserHandler);
// userRouter.delete('/users/:id', deleteUserHandler);

export default userRouter;

