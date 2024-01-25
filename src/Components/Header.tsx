import { Link } from "react-router-dom"

export const Header:React.FC =()=>{
    return(
        <main className="text-center bg-gray- rounded shadow-xl">
        <header className="flex justify-between  py-6 mx-12 mb-10 font-xl ">
       <Link to="/" className="font-roboto font-bold text text-5xl bg-black  bg-clip-text p-2">Test</Link>
       
       <nav className='flex gap-3  items-center'>
         {/* {username &&(
             <nav className='flex gap-3  items-center'>
             <button className='bg-transparent hover:bg-gradient-to-r from-violet-700 to-violet-950 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-700 hover:border- rounded'><Link to='/create'>Create Post</Link></button>
             <button className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'>  <a>Log Out</a></button>
             </nav>
          )} */}
         {/* {!username &&( */}
         <nav className='flex gap-3  items-center'>
         <button className=' bg-transparent hover:bg-violet-700 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-700 hover:border- rounded'><Link to="/login" >LogIn</Link></button> 
         <button className='bg-transparent hover:bg-violet-700 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-700 hover:border- rounded'><Link to="/register">Register</Link></button> 
         </nav>
 
         {/* )
         } */}
      
       </nav>
     </header >
         </main>
        
        
    )
}

