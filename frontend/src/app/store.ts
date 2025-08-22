import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer:{
        auth:authReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

// AppDispatch 타입 (useDispatch에서 사용)
export type AppDispatch = typeof store.dispatch;