import { useState } from "react";
import Layout from "../layout/Layout";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      setErrors(validate(user));
     const {data} = await axios.post(`http://localhost:3000/users`,user)
     console.log(data);
     toast.success("Registeration successful!",{autoClose:500})
     setUser({ name: "", email: "", gender: "", password: "" });
     setTimeout(() => {
        navigate("/login ")
     }, 1000);
     
    } catch (error) {
      console.log(error);
    }
  };

  function validate(user) {
    const errors = {};
    if (!user.name) errors.name = "Name is required!";
    if (!user.email) errors.email = "Email is required!";
    if (!user.password) errors.password = "Password is required!";
    if (!user.gender) errors.gender = "Gender is required!";
    console.log(errors);
    return errors;
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 my-3">
          <div className="card p-5 ">
          <h3 className="mb-3">Registeration Form</h3>
          
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="exampleName"
                  placeholder="enter your name"
                  autoComplete="off"
                  value={user.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <>
                    <h5 className="pt-2 text-danger">
                      <span className="px-2">*</span>
                      {errors.name}
                    </h5>
                  </>
                )}
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="enter email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleChange}
                />
              </FormGroup>
              {errors.email && (
                <>
                  <h5 className="pt-2 text-danger">
                    <span className="px-2">*</span>
                    {errors.email}
                  </h5>
                </>
              )}
              <FormGroup>
                <Label for="exampleSelect">Select Gender</Label>
                <Input
                  type="select"
                  name="gender"
                  id="exampleSelect"
                  onChange={handleChange}
                >
                  <option>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Transgender">Transgender</option>
                </Input>
              </FormGroup>
              {errors.gender && (
                <>
                  <h5 className="pt-2 text-danger">
                    <span className="px-2">*</span>
                    {errors.gender}
                  </h5>
                </>
              )}
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="enter password"
                  autoComplete="off"
                  value={user.password}
                  onChange={handleChange}
                />
              </FormGroup>
              {errors.password && (
                <>
                  <h5 className="pt-2 text-danger ">
                    <span className="px-2">*</span>
                    {errors.password}
                  </h5>
                </>
              )}

              <Button className="w-100" color="success">
                Register
              </Button>
            </Form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </Layout>
  );
}
