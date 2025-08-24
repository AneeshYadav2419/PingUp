import React from 'react'
import { dummyUserData } from '../assets/assets'
import { MapPin } from 'lucide-react'

const UserCard = ({user}) => {
    const currentUser = dummyUserData
    const handleFollow = async () =>{

    }
  return (
    <div className='p-4 pt-6 flex flex-col justify-between w-72 shadow border border-gray-200 rounded-md'>
        <div className='text-center'>
            <img src={user.profile_picture} alt='' className='rounded-full w-16 shadow-md mx-auto'/>
            <p className='mt-4 font-semibold'>{user.full_name}</p>
            {user.username && <p className='text-gray-500 font-light'>@{user.username}</p>}
            {user.bio && <p className='text-gray-600 mt-2 text-center text-sm px-4'>{user.bio}</p>}
        </div>

        <div>
            <div>
                <MapPin className='w-4 h-4'/>
            </div>
        </div>

    </div>
  )
}

export default UserCard