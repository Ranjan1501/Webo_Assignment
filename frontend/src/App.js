import "./App.css";
import Home from "./components/homepage/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            user && user._id ? (
              <Home setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )
          }
        ></Route>
        <Route
          path="/login"
          element={<Login setLoginUser={setLoginUser} />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
