import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/logo.jpg";
import "../App.css";

const App = ({ setUser }) => {
  const [formdata, setFormdata] = useState({ user: "", password: "" });

    const navigate = useNavigate();
    


  const handleForm = (e) => {
    e.preventDefault();
    if (!formdata.user && !formdata.password) return;
    console.log(e.target.value);
    setUser({ user: formdata.user, password: formdata.password });

    navigate("/");
  };

  return (
    <div class="container">
      
      <div class="screen">
      
        <div class="screen__content">
        <img src={img} alt="img-logo" style={{height:"100px"}}/>
          <form class="login" onSubmit={handleForm}>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="User name"
                name="user"
                onChange={(e) =>
                  setFormdata({ ...formdata, user: e.target.value })
                }
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setFormdata({ ...formdata, password: e.target.value })
                }
              />
            </div>
            <button class="button login__submit">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default App;
