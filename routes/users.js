import express from 'express';
import { createUser, getUser, getAllUser, deleteUser, updateUser } from '../controllers/user.js';

const router = express.Router();
// tat ca cac routes trong users.js deu bat dau boi /users


//get all users
router.get('/', getAllUser);

//add user 
router.post('/', createUser);

//get user by id
router.get('/:id', getUser);

//delete user by id
router.delete('/:id', deleteUser);

//update user by id
router.patch('/:id', updateUser);

export default router;