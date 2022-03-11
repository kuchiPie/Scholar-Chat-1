import React, { useState } from 'react'
import { FormControl, FormLabel, VStack,Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Login = () => {
    const [show,setShow]=useState(false);
    const [email,setmail] = useState();
    const [password,setPassword] = useState();
 
    const handleClick = ()=>setShow(!show);
 
    const submitHandler=()=>{};

    const setGuestUser=()=>{
        setmail('guest@example.com');
        setPassword('123456');
    };
 
   return (
     <VStack spacing='5px'>
 
         <FormControl id='email' isRequired>
             <FormLabel>Email</FormLabel>
             <Input placeholder="Enter Your Email" onChange={(event)=>setmail(event.target.value)}></Input>
         </FormControl>
 
         <FormControl id='password' isRequired>
             <FormLabel>Password</FormLabel>
             <InputGroup>
                 <Input type={show?'text':'password'} placeholder="Enter A Password" onChange={(event)=>setPassword(event.target.value)}></Input>
                 <InputRightElement width={'4.5rem'}>
                     <Button h={'1.75rem'} size='sm' onClick={handleClick}>{show?'Hide':'Show'}</Button>
                 </InputRightElement>
             </InputGroup>
         </FormControl>
 
         <Button colorScheme={'blue'} width='100%' style={{marginTop:15}} onClick={submitHandler}>Sign Up</Button>
         <Button variant={'solid'} colorScheme='red' width={'100%'} onClick={setGuestUser}>Guest User Credentials</Button>
 
     </VStack>
   )
}

export default Login;