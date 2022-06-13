import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import ChatProvider from './Context/ChatProvider';

ReactDOM.render(
  <BrowserRouter>
  {/* <React.StrictMode> */}
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
    {/* </React.StrictMode> */}
  </BrowserRouter>,
  document.getElementById('root')
);