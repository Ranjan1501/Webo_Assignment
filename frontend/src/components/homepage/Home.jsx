import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
const Home = ({ setLoginUser }) => {
  const [user, setUser] = useState({});
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("test") !== null)) {
      let user = JSON.parse(localStorage.getItem("test"));
      setUser(user);
    }
  }, []);

  // useEffect(() => {
  //   changeStatus();
  // }, []);
  // let getUser =  if (JSON.parse(localStorage.getItem("user")) {}
  // if (getUser !== null) {
  //   setUser(getUser);
  // }

  const deleteAccount = async () => {
    await fetch(`http://localhost:4000/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("Data:", res);
        // setLoginUser({});
        localStorage.removeItem("test");
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };
  const changeStatus = () => {
    // setTimeout(() => {
    //   setFlag(false);
    // }, 2000);

    let active = {
      status: "Active",
    };
    axios
      .patch(
        `http://localhost:4000/${user._id}`,
        active
        // method: "PATCH",
        // headers: {
        //   Accept: "application/json",
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(active),
      )
      .then((res) => res.json())
      .then((data) => {
        console.log("Data", data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  };

  const logOutUser = () => {
    setLoginUser({});
    localStorage.removeItem("test");
  };

  // const setLoginUser = () => {
  //     setUser(setLoginUser);
  // }

  //   console.log("user:", getUser);

  const editPassword = async () => {
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
        <div className="button" onClick={editPassword}>
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
