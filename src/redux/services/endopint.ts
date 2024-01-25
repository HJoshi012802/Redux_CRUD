import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiEndpoint =createApi({
    reducerPath:'apiEndpoint',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000'}),
    endpoints:(builder)=>({
        RegisterUser:builder.mutation({
            query:(newUser)=>{
                return{
                    url:"user",
                    method:'POST',
                    body:{newUser},
                }
            }
        })
    })
})

export const {useRegisterUserMutation} =apiEndpoint;