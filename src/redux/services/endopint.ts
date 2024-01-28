import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {setCredentials,logOut} from "../services/authSlice";

export const apiEndpoint =createApi({
    reducerPath:'apiEndpoint',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000/'}),
    tagTypes:["Posts"],
    endpoints:(builder)=>({

        RegisterUser:builder.mutation({
            query:(payload:{name:string;email:string;password:string})=>{
                return{
                    url:"register",
                    method:'POST',
                    body:payload,
                    headers:{
                        "Content-type":'application/json; charset=UTF-8',
                    }
                }
            }
        }),
        
        SigninUser:builder.mutation({
            query:(payload:{email:string;password:string})=>({

                    url:"signin",
                    method:'POST',
                    body:payload,
                    headers:{"Content-type":'application/json; charset=UTF-8',}
            })
        }),

    })
})

export const {useRegisterUserMutation, useSigninUserMutation} =apiEndpoint;