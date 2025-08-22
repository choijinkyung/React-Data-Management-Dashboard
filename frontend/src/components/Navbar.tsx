import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate } from 'react-router-dom';
import type {RootState} from '../app/store'
import {logout} from '../features/auth/authSlice';
import {Box, Button, Typography, AppBar, Toolbar} from '@mui/material'

const Navbar:React.FC = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state:RootState)=> state.auth.user)

    const handleLogout = ()=>{
        dispatch(logout())
        navigate('/login',{replace:true})
    }

    return (
        <AppBar position="fixed" sx={{ width: '100%', top: 0, zIndex: 1100 }}>
            <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
                <Typography variant="h6">MyDashboard</Typography>                
                <Box display="flex" alignItems="center" gap={2}>
                    <Typography>{user?.name}</Typography>
                    <Button color="inherit" onClick={handleLogout}>Logout</Button>
                </Box>           
            </Toolbar>
        </AppBar>
    )
}

export default Navbar