import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';
import { url } from 'inspector';
// import {setCredentials,logOut} from "../services/authSlice";

interface Job{
    _id:string,
    title:string,
    description:string,
    categoryName:string,
    owner:string,
    ppl_Applied:string[],
}

export const apiEndpoint =createApi({
    reducerPath:'apiEndpoint',
    baseQuery:fetchBaseQuery(
        {
            baseUrl:'http://localhost:4000/',
            prepareHeaders:(headers,{getState})=>{
                const authToken=(getState() as RootState).auth.authToken;
                const refreshToken=(getState() as RootState).auth.refreshToken;
                if(authToken && refreshToken){
                    console.log(`Bearer ${authToken}+${refreshToken}`)
                    headers.set("authorization",`Bearer ${authToken}+${refreshToken}`);
                }
                return headers;
            }
        }
    ),
    endpoints:(builder)=>({

        RegisterUser:builder.mutation({
            query:(payload:{name:string;email:string;password:string})=>{
                return{
                    url:"register",
                    method:'POST',
                    body:payload,
                }
            }
        }),
        
        SigninUser:builder.mutation({
            query:(payload:{email:string;password:string})=>{
                return{
                    url:"signin",
                    method:'POST',
                    body:payload,
                }
            }
        }),


        createIntrest:builder.mutation({
            query:(payload:{intrest:string})=>{
                return{
                    url:"createintrest",
                    method:'POST',
                    body:payload,
                    headers:{"Content-type":"application/json"},
                }
            }
        }),

        getJobs:builder.query<Job[],void>({
            query:()=> "jobs"
        }),

    })
})

export const {useRegisterUserMutation, useSigninUserMutation, useCreateIntrestMutation,useGetJobsQuery} =apiEndpoint;