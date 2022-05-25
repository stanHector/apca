import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import img from "../assets/logo.jpg";
import "../App.css";
import { login } from "../state/slice/authSlice";
import { clearMessage } from "../state/slice/messageSlice";

const App = ({ setUser }) => {
  const [formdata, setFormdata] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const navigate = useNavigate();



  const handleLogin = (e) => {
  e.preventDefault();
  const { username, password } = formdata;
  setLoading(true);
  dispatch(login({ username, password }))
    .unwrap()
    .then(() => {
      navigate("/");
      // window.location.reload();
    })
    .catch(() => {
      setLoading(false);
      
    });
  };

  useEffect(() => {
    if (message === "Request failed with status code 401") {
      alert("Invalid username or password");
    } 
    return () => {
      dispatch(clearMessage())
    };
  }, [message, dispatch]);
  
  

  // const handleForm = (e) => {
  //   e.preventDefault();
  //   if (!formdata.user && !formdata.password) return;
  //   console.log(e.target.value);
  //   setUser({ user: formdata.user, password: formdata.password });

  //   navigate("/");
  // };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <img src={img} alt="img-logo" style={{ height: "100px" }} />
          <form className="login" onSubmit={handleLogin}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="User name"
                name="user"
                onChange={(e) =>
                  setFormdata({ ...formdata, username: e.target.value })
                }
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
                name="password"
                onChange={(e) =>
                  setFormdata({ ...formdata, password: e.target.value })
                }
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">{loading ? 'Please wait' : 'Log In Now'}</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default App;
