import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { useContext } from 'react'
import { data } from "../App";


export default function Header() {
  const [name, setName] = useState("");
  const [count,setCount] = useContext(data)
  const navigate = useNavigate();

  useEffect(() => {
    setName(localStorage.getItem("name"));
    // console.log(count);
  }, []);

  // logout function
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark nav-dark">
        <div className="container">
          <Link className="navbar-brand" to="#">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {name ? (
                <>
                  <li className="nav-item">
                    <button
                      className="btn btn-primary"
                      aria-current="page"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link btn btn-success mx-2"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-primary" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <Link className="nav-link btn btn-primary" to="/cart">
                <button
                  type="button"
                 className="btn btn-light position-relative"

                >
                  Cart
                  <span className="position-absolute top-0 start-100 
                  translate-middle badge rounded-pill bg-info">
                    {count.length  }
                   
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
