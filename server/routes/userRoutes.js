import express from 'express'
import { protect } from '../middlewares/auth.js';
import { acceptConnectionRequest, discoverUsers, followUser, getUserConnections, getUserData, sendConnectionRequest, unfollowUser, updateUserData } from '../controllers/userController.js';
import { upload } from '../configs/multer.js';

const userRouter = express.Router();

userRouter.get('/data', protect, getUserData)
userRouter.post('/update', protect, upload.fields([{name:'profile', maxCount: 1}, {name:'cover',maxCount: 1}]) , updateUserData)
userRouter.post('/discover',protect, discoverUsers)
userRouter.post('/follow',protect, followUser)
userRouter.post('/unfollow',protect, unfollowUser)
userRouter.post('/connect',protect, sendConnectionRequest)
userRouter.post('/accept',protect, acceptConnectionRequest)
userRouter.get('/connections',protect, getUserConnections)
export default userRouter