import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface LoginRequest{
    email:string,
    password:string
}

interface LoginResponse {
    token:string,
    user:{
        name:string,
        email:string
    }
}

const delay = (ms:number)=> new Promise(res=>setTimeout(res,ms));

export const authApi = createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({baseUrl:'/api'}),
    endpoints:(builder)=>({
        login:builder.mutation<LoginResponse,LoginRequest>({
            async queryFn(arg){
                await delay(500);
                const mockUser = {name:'Jinkyung Choi', email:'jkchoi@example.com'};

                if(arg.email ===mockUser.email && arg.password ==='test'){
                    return {data:{token:'mock-token-12345',user:mockUser}}
                }else{
                    return {error:{status:401,data:{message:"Invalid credentials"}}}
                }
            }
            // query:(credentials)=>({
            //     url:'/login',
            //     method:'POST',
            //     body:credentials
            // })
        })
    })
})

export const {useLoginMutation} = authApi