import React, { useEffect, useState } from 'react'
import { assets, dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'
import StoriesBar from '../components/StoriesBar'
import PostCard from '../components/PostCard'

const Feed = () => {
  const [feeds, setfeeds] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchFeeds = async()=>{
    setfeeds(dummyPostsData)
    setLoading(false)          
  }
  useEffect(()=>{
    fetchFeeds()
  },[])

  return !loading ? (
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center
    xl:gap-8'>
      {/* stories and postlist */}
      <div>
        <StoriesBar />
        <div className='p-4 space-y-6'>
          {feeds.map((post)=>(
            // <PostCard  key={post_id} post={post}/>
            <PostCard key={post.id || post._id || post.post_id} post={post} /> 

          ))}

        </div>

      </div>
      {/* Right sidebar */}
      <div className='max-xl:hidden sticky top-0'>
        <div className='max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow'>
          <h3 className='text-slate-800 font-semibold'>Sponsored</h3>
          <img src={assets.sponsored_img} className='w-75 h-50 rounded-md' alt=''/>
          <p className='text-slate-600'>Email Marketing</p>
          <p className='text-slate-400'>Superchange your marketting with a powerfull easy to use platfrom built for results </p>
        </div>
        <h1>Recent messages</h1>
      </div>

    </div>
    
  ) 
  : 
  <Loading />
}

export default Feed