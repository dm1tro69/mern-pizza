import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <div className="App">
        <Navbar/>
         <Routes>
             <Route path={'/'} element={<HomeScreen/>}/>
             <Route path={'/cart'} element={<CartScreen/>}/>
             <Route path={'/login'} element={<LoginScreen/>}/>
             <Route path={'/register'} element={<RegisterScreen/>}/>
         </Routes>



    </div>
  );
}

export default App;
