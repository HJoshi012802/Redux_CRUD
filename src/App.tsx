
import {Route, Routes} from "react-router-dom";
import {Home}from './Components/Home';
import {Register} from './Components/Register';
import {Login} from './Components/Login';
import { Navbar } from "./Components/Navbar";
import { useAppDispatch } from "./redux/services/Hooks";
import { setUser } from './redux/services/authSlice';
import { useEffect } from "react";


function App() {
  const dispatch =useAppDispatch();
  const user =JSON.parse(localStorage.getItem('user')||"{}");

  useEffect(()=>{
 dispatch(setUser(user))
  },[])
  return (
   <Routes>
    
    <Route path='/' element={<Navbar/>}>
      <Route index element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
     
    </Route>
    </Routes>
  );
}

export default App;



{/* <div className="App">
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/login">LogIn</Link>
    </li>
    <li>
      <Link to="/register">Register</Link>
    </li>
  </ul>
</nav>

<Outlet />
</div> */}