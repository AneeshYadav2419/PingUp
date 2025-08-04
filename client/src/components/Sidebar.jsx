
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import MenuItems from './MenuItems'
import { CirclePlus, Link } from 'lucide-react'

const Sidebar = ({SidebarOpen, setSidebarOpen}) => {
  const navigate = useNavigate()
  return (
    <div className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col justify-between items-center
    max-sm:absolute top-0 bottom-0 z-20 ${SidebarOpen ? 'translate-x-0 ': 'max-sm:translate-x-full'} transition-all duration-300
    ease-in-out`}>
      <div className='w-full'>
        <img onClick={()=>navigate('/')} src={assets.logo} className='w-26 ml-7 my-2 cursor-pointer ' alt=''/>
        <hr className='border-gray-300 mb-8'/>
        <MenuItems setSidebarOpen={setSidebarOpen}/>

        
        
        <button onClick={()=> navigate("create-post")} className="flex items-center justify-center gap-2 py-2.5 px-14 mt-6 mx-6 rounded-lg
        bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95 transition text-white
        text-base font-medium cursor-pointer">
            <CirclePlus className='w-5 h-5 '/>
          Create Post</button>
        
        
       
   

       

      </div>
       
    </div>
  )
}

export default Sidebar