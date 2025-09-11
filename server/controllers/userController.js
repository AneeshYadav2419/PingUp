import imagekit from "../configs/imageKit.js"
import User from "../models/User.js"
import fs from 'fs'

export const getUserData = async (req, res) => {
    try {
        const { userId } = req.auth;
        const user = await User.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "user Not Found" })

        }
        res.json({ success: true, user })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export const updateUserData = async (req, res) => {
    try {
        const {userId} = req.auth;
        let { username, bio, location, full_name } = req.body;

        const tempUser = await User.findById(userId);

       // !username && (username = tempUser.username)
          if (!tempUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

        if (!tempUser.username !== username) {
            const user = User.findOne({ username })
            if (user) {
                username = tempUser.username
            }

        }
        const updatedData = {
            username,
            bio,
            location,
            full_name
        }

        const profile = req.files.profile && req.files.profile[0]
        const cover = req.files.cover && req.files.cover[0]

        if (profile) {
            const buffer = fs.readFileSync(profile.path)
            const response = await imagekit.upload({
                file: buffer,
                fileName: profile.originalname,
            })

            const url = imagekit.url({
                path: response.filePath,
                transformation: [
                    { quality: 'auto' },
                    { format: 'webp' },
                    { width: '512' }
                ]
            })
            updatedData.profile_picture = url;
        }

        if (cover) {
            const buffer = fs.readFileSync(cover.path)
            const response = await imagekit.upload({
                file: buffer,
                fileName: profile.originalname,
            })

            const url = imagekit.url({
                path: response.filePath,
                transformation: [
                    { quality: 'auto' },
                    { format: 'webp' },
                    { width: '1280' }
                ]
            })
            updatedData.cover_photo = url;
        }

        const user = await User.findByIdAndUpdate(userId, updatedData, {new : true})

        res.json({success: true, user, message: 'Profile updated successfully'})


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
// find users using username, email, location, name 

export const discoverUsers = async (req, res) => {
    try {
        const {userId} = req.auth()
        const { input } = req.body;

        const allUsers = await User.find(
            {
                $or: [
                    {username: new RegExp(input, 'i')},
                      {email: new RegExp(input, 'i')},
                        {full_name: new RegExp(input, 'i')},
                          {location: new RegExp(input, 'i')},

                ]
            }
        )

        const filterUsers = allUsers.filter(user => user._id !== userId);

        res.json({success: true, users: filterUsers})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}
 // folloew users

 export const followUser = async (req, res) => {
    try {
        const {userId} = req.auth()
        const { id } = req.body;

        const user = await User.findById(userId)

        if(user.following.includes(id)){
            return res.json({success: false, message: 'You are already following this user'})
        }

        user.following.push(id);
        await user.save()

        const toUser = await User.findById(id)
        toUser.followers.push(userId)
        await toUser.save()

        res.json({success: true, message:'Now you are following thia user'})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

//unfolow

 export const unfollowUser = async (req, res) => {
    try {
        const {userId} = req.auth()
        const { id } = req.body;

        const user = await User.findById(userId)

        user.following = user.following.filter(user => user !== id);
        await user.save()

        const toUser = await User.findById(id)
        toUser.followers  = toUser.followers.filter(user => user != userId);
        await toUser.save()

        res.json({success: true, message:'you are not longer following this user'})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

