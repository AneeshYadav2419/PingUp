// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Login from './pages/Login'
// import Messages from './pages/Messages'
// import ChatBox from './pages/ChatBox'
// import Connection from './pages/Connection'
// import Discover from './pages/Discover'
// import Profile from './pages/Profile'
// import Feed from './pages/Feed'
// import { useUser } from '@clerk/clerk-react'
// import { User } from 'lucide-react'
// import Layout from './pages/Layout'
// import CreatePost from './pages/CreatePost'
// import {Toaster} from 'react-hot-toast'

// const App = () => {
//   const {user} = useUser()
//   return (
//     <>
//     <Toaster />
//     <Routes>
//       <Route path='/' element={ !user ? <Login /> : <Layout />}>
//         <Route index element ={<Feed />}/>
//       <Route path='messages' element={<Messages />}/>
//         <Route path='messages/:userId' element={<ChatBox />}/>
//           <Route path='connections' element={<Connection />}/>
//             <Route path='discover' element={<Discover />}/>
//               <Route path='profile' element={<Profile />}/>
//                 <Route path='profile/:profileId' element={<Profile />}/>
//                   <Route path='create-post' element={<CreatePost />}/>

//       </Route>
//     </Routes>
//     </>
    
//   )
// }

// export default App


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox'
import Connection from './pages/Connection'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import Feed from './pages/Feed'
import { useUser,useAuth } from '@clerk/clerk-react'
import Layout from './pages/Layout'
import CreatePost from './pages/CreatePost'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'

const App = () => {
  const { user } = useUser()

  const {getToken} = useAuth()

  useEffect(()=>{
    if(user){
      getToken().then((token)=>console.log(token))
    }
  },[user])

  return (
    <>
      <Toaster />
      <Routes>
        {/* If user is not logged in → show Login, else Layout */}
        <Route path="/" element={!user ? <Login /> : <Layout />}>
          {/* Home feed */}
          <Route index element={<Feed />} />

          {/* Messages */}
          <Route path="messages" element={<Messages />} />
          {/* <Route path="messages/:userId" element={<ChatBox />} /> */}
          <Route path="message/:userId" element={<ChatBox />} />


          {/* Connections */}
          <Route path="connections" element={<Connection />} />

          {/* Discover */}
          <Route path="discover" element={<Discover />} />

          {/* Profile (own + other) */}
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:profileId" element={<Profile />} />

          {/* Create Post */}
          <Route path="create-post" element={<CreatePost />} />
        </Route>

        {/* Fallback for unknown routes */}
        <Route path="*" element={<h1 className="text-center mt-10">404 - Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
