import { Box, Button, Tooltip ,Text, Menu, MenuButton, MenuList, Avatar, MenuItem, MenuDivider} from '@chakra-ui/react';
import React, { useState } from 'react'
import { BellIcon,ChevronDownIcon } from '@chakra-ui/icons'
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useHistory } from 'react-router-dom';

const SideDrawer = () => {
    const history = useHistory();
    const {user} = ChatState();
    const [search,setSearch] = useState();
    const [searchResult,setSearchResult] = useState();
    const [loading,setLoading] = useState(false);
    const [loadingChat,setLoadingChat] = useState();

    const logoutHandler = ()=>{
        localStorage.removeItem('userInfo');
        history.push('/');
    }

    return (
        <>
            <Box d='flex' justifyContent={'space-between'} alignContent={'center'} bg={'white'} w={'100%'} p={'5px 10px 5px 10px'} borderWidth='5px'>
                <Tooltip label="Search Users To Chat With" hasArrow placement='bottom-end'>
                    <Button variant={'ghost'}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <Text d={{base:'none',md:'flex'}} px={'4'}>Search User</Text>
                    </Button>
                </Tooltip>
                <Text fontSize={'2xl'} fontFamily={'Work sans'}>Scholar Chat</Text>
                <div>
                    <Menu>
                        <MenuButton p={1}>
                            <BellIcon fontSize={'2xl'} m={1}/>
                        </MenuButton>
                        {/* <MenuList></MenuList> */}
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                            <Avatar size={"sm"} cursor={"pointer"} name={user.name} src={user.pic}></Avatar>
                        </MenuButton>
                        <MenuList>
                            <ProfileModal user={user}>
                                <MenuItem>My Profile</MenuItem>
                            </ProfileModal>
                            <MenuDivider/>
                            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Box>
        </>
    )
}

export default SideDrawer