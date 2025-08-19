import React, { useEffect, useState } from 'react'
import { dummyRecentMessagesData } from '../assets/assets'

const RecentMessages = () => {
    const [messages, setMessages] = useState([])

    const fetchRecentMessages = async () => {
        setMessages(dummyRecentMessagesData)
    }
    useEffect (()=>{
        fetchRecentMessages()
    },[])
    return (
    <div>
        
    </div>
  )
}

export default RecentMessages