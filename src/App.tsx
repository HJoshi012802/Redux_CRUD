import {Route, Routes} from "react-router-dom";
import {Home}from './Components/Home';
import {Register} from './Components/Register';
import {Login} from './Components/Login';
import { Navbar } from "./Components/Navbar";

function App() {
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