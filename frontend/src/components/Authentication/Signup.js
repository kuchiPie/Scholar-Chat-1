import { FormControl, FormLabel, VStack,Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {

   const [show,setShow]=useState(false);
   const [name,setName] = useState();
   const [email,setmail] = useState();
   const [confirmPassword,setConfirmPassword] = useState();
   const [password,setPassword] = useState();
   const [pic,setPic] = useState();

   const handleClick = ()=>setShow(!show);

   const postDetails=(pics)=>{};

   const submitHandler=()=>{};

  return (
    <VStack spacing='5px'>

        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name" onChange={(event)=>setName(event.target.value)}></Input>
        </FormControl>

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

        <FormControl id='confirm-password' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
                <Input type={show?'text':'password'} placeholder="ReEnter the password" onChange={(event)=>setConfirmPassword(event.target.value)}></Input>
                <InputRightElement width={'4.5rem'}>
                    <Button h={'1.75rem'} size='sm' onClick={handleClick}>{show?'Hide':'Show'}</Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='pic' isRequired>
            <FormLabel>Upload Your Picture</FormLabel>
            <Input type={'file'} p={1.5} accept='image/*' onChange={(event)=>postDetails(event.target.files[0])}></Input>
        </FormControl>

        <Button colorScheme={'blue'} width='100%' style={{marginTop:15}} onClick={submitHandler}>Sign Up</Button>

    </VStack>
  )
}

export default Signup