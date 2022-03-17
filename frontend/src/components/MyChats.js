import { useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider'
import axios from 'axios';

const MyChats = () => {
    const [loggedUser, setLoggedUser] = useState();
    const { user, selectedChat, setSelectedChat, chats, setChats } = ChatState();
    const toast = useToast();

    const fetchChats = async () => {
        // console.log(user._id);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            };

            const { data } = await axios.get("/api/chat", config);
            setChats(data);
            console.log(data);
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left",
            });
        }
    };

    useEffect(()=>{
        setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
        fetchChats();
    },[])

    return (
        <div>MyChats</div>
    )
}

export default MyChats