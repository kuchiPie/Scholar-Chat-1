import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import {Box} from '@chakra-ui/react'
import SideDrawer from '../components/misc/SideDrawer'
import ChatBox from '../components/ChatBox';
import MyChats from '../components/MyChats';

// // axios is used to make request from backend to frontend or front to back
// import axios from 'axios';

const ChatPage = () => {
  const {user} = ChatState();
  return (
    <>
    <div style={{width:'100%'}}>
      {user && <SideDrawer/>}
      <Box d={'flex'} justifyContent={'space-between'} w={'100%'} h={'91.5vh'} p={'10px'}>
        {user && <MyChats/>}
        {user && <ChatBox/>}
      </Box>
    </div>
    </>
  );
}

export default ChatPage;