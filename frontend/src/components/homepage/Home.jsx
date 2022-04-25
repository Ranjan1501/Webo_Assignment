import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";
import axios from "axios";
const Home = ({ setLoginUser }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // get user details after login
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("test") !== null)) {
      let user = JSON.parse(localStorage.getItem("test"));
      setUser(user);
    }
  }, [user]);

  // delete Account
  const deleteAccount = async () => {
    await fetch(`http://localhost:4000/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Data:", res);
        localStorage.removeItem("test");
        setLoginUser({});
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  // toggle Status
  const changeStatus = () => {
    let active = {
      status: "Active",
    };
    axios
      .patch(`http://localhost:4000/${user._id}`, active)
      .then((res) => res.json())
      .then((data) => {
        console.log("Data", data);
        setLoginUser({});
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  const logOutUser = () => {
    setLoginUser({});
    localStorage.removeItem("test");
  };

  // edit profile
  const editProfile = async () => {
    await fetch(`http://localhost:4000/${user._id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Data", data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  //   console.log(setLoginUser);
  return (
    <div className="homepage">
      <h1>Hello {user.name} Welcome </h1>
      <h2> Account Status: {user.status} </h2>
      <div className="buttonGroup">
        <div className="button" onClick={logOutUser}>
          Logout
        </div>
        <br />
        <div className="button" onClick={deleteAccount}>
          Delete Account
        </div>
        <br />
        <div className="button" onClick={() => navigate("/register")}>
          Edit Profile
        </div>
        <br />

        <div className="button" onClick={changeStatus}>
          Toggle Status
        </div>

        <br />
      </div>
    </div>
  );
};

export default Home;
