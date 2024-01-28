import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/services/Hooks";
import ErrorBoundary from "../Error.Boundary";
import { logout,selectAuth } from "../redux/services/authSlice";
import { useNavigate } from "react-router-dom";


export const Home:React.FC =()=>{
    const {name}=useAppSelector(selectAuth);
    const navigate =useNavigate();
    const dispatch =useAppDispatch();
    const handlelogout =()=>{
    dispatch(logout());
    window.alert("User is Logged out");
    navigate("/login")
    }
  
    return(
        <section className="vh-100">
            <ErrorBoundary>

            <h1>Welcome to the Home Page</h1>
            <h2>{name}</h2>
            <button className="bg-violet-700  text-white font-bold m-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline  transition  hover:delay-300 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 ease-in-out"
            onClick={()=>handlelogout()}
            >Logout</button>

            </ErrorBoundary>
        </section>
    )
}

