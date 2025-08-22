import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit'
interface AuthState{
    token :string | null;
    user:{
        name:string;
        email:string; 
    } | null
}

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');

const initialState:AuthState ={
    token:token ? token : null,
    user: user ? JSON.parse(user) :null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials:(state, action: PayloadAction<AuthState>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;

            localStorage.setItem('token',state.token)
            localStorage.setItem('user',JSON.stringify(state.user))
        },
        logout:(state)=>{
            state.token=null;
            state.user=null;

            localStorage.removeItem('token');
            localStorage.removeItem('user')
        }
    }
})

export const {setCredentials,logout} = authSlice.actions;
export default authSlice.reducer;