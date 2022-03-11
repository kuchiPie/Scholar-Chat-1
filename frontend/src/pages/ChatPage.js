import React, { useEffect, useState } from 'react'

// axios is used to make request from backend to frontend or front to back
import axios from 'axios';

const ChatPage = () => {

  // Hook for managing the chats data
    const [chats,setChats] = useState([]);

    // Fetching the chats from API and using it via useEffect Hook which loads the things on the first load of the app
    const fetchChats = async() =>{
        const {data} = await axios.get('/api/chat');
        setChats(data);
    }

    // Hook in react which runs when the app runs for the first time
    useEffect(()=>{
        fetchChats();
    },[]);


  return (
    <div>{chats.map((chat)=>(
        <div key={chat._id}>{chat.chatName}</div>
    ))}</div>
  );
}

export default ChatPage;