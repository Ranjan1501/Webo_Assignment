import React, { useEffect, useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "../homepage/Home";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    date: "",
    password: "",
    reEnterPassword: "",
  });
  useEffect(() => {
    registerUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const registerUser = () => {
    const { name, email, password, phone, gender, reEnterPassword } = user;
    if (
      name &&
      email &&
      password &&
      phone &&
      gender &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:4000/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("invalid input");
    }
  };

  return (
    <div className="register">
      <h3> User Registration</h3>
      {console.log("User", user)}

      {/* name */}
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      ></input>
      {/* email */}
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      ></input>
      {/* phone  */}
      <input
        type="number"
        name="phone"
        value={user.phone}
        placeholder="Your Phone Number"
        onChange={handleChange}
      ></input>

      {/* gender  */}

      <input
        type="text"
        name="gender"
        value={user.gender}
        placeholder="Your Gender"
        onChange={handleChange}
      ></input>

      {/* date */}
      <input
        type="text"
        name="date"
        value={user.date}
        placeholder="Your Date"
        onChange={handleChange}
      ></input>

      {/* password */}

      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Your Password"
        onChange={handleChange}
      ></input>

      {/* confirm password */}
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={() => registerUser()}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
};

export default Register;
