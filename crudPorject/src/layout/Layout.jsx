import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}) {
  let [count,setCount] = useState(10)
  return (
    <div>
        <Header count={count} countTotal = {setCount}></Header>
        <main style={{backgroundColor:'skyblue'}} >{children}</main>
        <Footer></Footer>
       
    </div>
  )
}
