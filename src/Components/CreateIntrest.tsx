import { useEffect, useState } from 'react';
import { userSchema } from '../Helper/Yup';
import {useCreateIntrestMutation} from '../redux/services/endopint';
import { useNavigate } from 'react-router-dom';

interface Intrest{
  intrest:String,
}


export const CreateIntrest:React.FC =()=>{
  const [intrest,setIntrest] =useState<string>("");

  const navigate=useNavigate();

  const [createIntrest,{data,isSuccess,isError,error}]=useCreateIntrestMutation();

  

  async function handleIntrest(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    
   try{
    
   const result= await createIntrest({intrest});
   console.log(result)
   }catch(err){
    window.alert(err);
   }
  }

  useEffect(()=>{
    if(isSuccess){
      console.log(data);
      window.alert(` Created Intrest`);
      navigate("/")
    }
    if(isError){
      window.alert(`Error in Creating Intrest`);
    }
  },[isSuccess,isError])

    return(
        <div className="w-full max-w-xs mx-auto mt-10">
        <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-2" onSubmit={(e)=>handleIntrest(e)}>
            <h3 className='text-center text-3xl pb-6 font-bold text-violet-700'>Create Intrest</h3>
          <div className="mb-3">
            <label className="block text-gray-600 text-sm font-bold mb-2" >
              Intrest
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
            type="text" 
            value={intrest}
            onChange={(e)=>setIntrest(e.target.value)}
            placeholder="Enter Your Intrests" 
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-violet-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  transition  hover:delay-300 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 ease-in-out" type="submit">
              Submit
            </button>
          </div>
        </form>
    
      </div>
    )
}