import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {useState} from 'react'
import {setCredentials} from './authSlice'
import {useLoginMutation} from './authApi'
import type {AppDispatch} from '../app/store'
import {Box,Paper,TextField,Button,Typography,Alert,CircularProgress} from '@mui/material'

interface loginForm{
    email:string;
    password:string;
}


const AuthForm:React.FC = ()=>{
    const dispatch=useDispatch<AppDispatch>()
    const [login, {isLoading}] = useLoginMutation();
    const [apiError, setApiError] = useState<string|null>(null)
    const token = useSelector((state: RootState) => state.auth.token);
    const route =useNavigate()
    const {register, handleSubmit, formState:{errors}}=useForm<LoginForm>({
        defaultValues: {email:'', password:''},
        mode:'onChange'
    })

    const onSubmit = async(values:LoginForm)=>{
        setApiError(null);
        try{
            const res = await login(values).unwrap();
            dispatch(setCredentials(res))
            if(token){
                route('/dashboard')
            }
           
        }catch(err:any){
            setApiError(err?.data?.message || 'Login Failed.')
        }
    }
    return(
        <>
            <Box  sx={{
                    position: 'fixed', // 화면 전체 기준
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    backgroundColor: '#f5f5f5', // 배경 확인용
                }}>
                <Paper elevation={3} sx={{ p: 4, width: 380 }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                    Sign in
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                    Use any email & password (mocked auth)
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <TextField
                            label="Email"
                            type="email"
                            fullWidth
                            margin="normal"
                            autoComplete="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: 'Enter a valid email' },
                            })}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />

                        <TextField
                            label="Password"
                            type="password"
                            fullWidth
                            margin="normal"
                            autoComplete="current-password"
                            {...register('password', {
                            required: 'Password is required',
                            minLength: { value: 4, message: 'Min 4 characters' },
                            })}
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />

                        {apiError && <Alert severity="error" sx={{ mt: 2 }}>{apiError}</Alert>}
                            <Typography>{token}</Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2 }}
                            disabled={isLoading}
                            startIcon={isLoading ? <CircularProgress size={18} /> : null}
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </Button>
                    </Box>
                </Paper>
            </Box>              
        </>
    )
}

export default AuthForm;