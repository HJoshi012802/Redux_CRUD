import { useEffect, useState } from 'react';
import {useGetJobsQuery} from '../redux/services/endopint';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector  } from '../redux/services/Hooks';
import { selectAuth } from "../redux/services/authSlice";
import { setUser } from '../redux/services/authSlice';



export const Job:React.FC =()=>{
  const navigate=useNavigate();
  const {name,authToken,refreshToken}=useAppSelector(selectAuth);
  const {data,error,isLoading,isFetching,isSuccess,isError,} = useGetJobsQuery();
  
  useEffect(()=>{
   console.log(data);

  },[isSuccess,isError])
  

  useEffect(()=>{
   if(!authToken&&!refreshToken){
    navigate("/");
   }else{
    navigate("/jobs")
   }
  },[authToken,refreshToken])


    return(
    <div className="w-full max-w-xs mx-auto mt-20">
       <h1 className="text-center text-2xl font-bold text-violet-700">See All Jobs</h1> 
       {isLoading && <h2 className="text-center text-xl">Loading....</h2>}
       {error && <h2 className="text-center text-xl">Error</h2>}
       {isSuccess &&(
        <div>
            {/* {data.map((job)=>{
                   return <div key={job._id}>
                    <span>{job.title}</span>
                    <span>{job.categoryName}</span>
                    <span>{job.description}</span>
                   </div>
            })} */}
        </div>
       )}
    </div>
    )
}

