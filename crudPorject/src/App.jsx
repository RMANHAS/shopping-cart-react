import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./auth/register";
import Login from "./auth/Login";
import { ToastContainer } from "react-toastify";
import Profile from "./component/Profile";
import ProductDetail from "./component/ProductDetail";
import { useState,createContext} from "react";
import Cart from "./component/Cart";
const data  = createContext()
function App() {
  const [count,setCount] = useState([])
  return (
    <>
    <data.Provider value={[count,setCount]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/productDetail/:id" element={<ProductDetail/>}/>
          <Route path="/cart" element={<Cart/>}/>

        </Routes>
      </BrowserRouter>
      <ToastContainer/>
      </data.Provider>
    </>
  );
}

export default App;
export {data};
