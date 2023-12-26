import { useState } from "react";
import Layout from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      // console.log(email,password);
      const { data } = await axios.get(
        `http://localhost:3000/users/?email=${email}`
      );
      
       console.log(data[0].email);
       localStorage.setItem("name",data[0].name)
       localStorage.setItem("email",data[0].email)
       localStorage.setItem("gender",data[0].gender)

      if (data[0]?.email === email) {
        console.log("login success");
        navigate("/profile");
      } else {
        toast.error("Login failed!!!",{autoClose:500})
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 my-3">
          <div className="card p-5">
            <h3 className="mb-5">Login Form</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  We will never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-success w-100"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
            <div>
              <p className="m-3">
                If you are not registered.
                <Link
                  to="/register"
                  style={{ background: "gray", padding: "4px" }}
                >
                  Click here
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </Layout>
  );
}

export default Login;
