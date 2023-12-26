import { useState } from "react";
import Home from "./pages/Home";
import Header from "./layout/Header";

function liftState() {
  const [count,setCount] = useState([])
  return (
    <div>
      <Home count={count} onCountChange={setCount} />
      <Header count={count} />{" "}
    </div>
  );
}
export default liftState;
