import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <div className="App">
        <Navbar/>
         <Routes>
             <Route path={'/'} element={<HomeScreen/>}/>
             <Route path={'/cart'} element={<CartScreen/>}/>
             <Route path={'/login'} element={<LoginScreen/>}/>
         </Routes>



    </div>
  );
}

export default App;
