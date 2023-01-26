import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router';
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setUser } from "../../store/user";
import { useState } from 'react';
import "./login.css"

const Login =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   
    function handleLogin(e) {
        e.preventDefault();
        axios
          .post(
            'http://localhost:3001/api/users/login',
            { email: email, password: password },
            { withCredentials: true },
          )
          .then((res) => dispatch(setUser(res.data)))
          .then(() => {
            navigate('/');
            alert('Congratulations successful Log in!');
          })
          .catch(() => alert('Wrong Log in, please try again'));
         
      }

      function changeEmail(e) {
        setEmail(e.target.value);
      }

      function changePassword(e) {
        setPassword(e.target.value);
      }
  

    return(
        <form className="form" onSubmit={handleLogin} autoComplete="off">
        <h2 className="form__title">Log In</h2>
        <p className="form__paragraph">
          Do not you have an account yet? <a class="form__link" href='/'><Link to="/register" >
                  Enter here
                </Link></a>
        </p>
  
        <div className="form__container">
          <div className="form__group">
            <span className="form__line"></span>
          </div>
          <div class="form__group">
            <input
              email={email}
              onChange={changeEmail}
              required
              type="email"
              id="user"
              className="form__input"
              placeholder=" "
            />
            <label class="form__label">Email:</label>
            <span className="form__line"></span>
          </div>
          <div class="form__group">
            <input
              password={password}
              onChange={changePassword}
              required
              type="password"
              id="password"
              className="form__input"
              placeholder=" "
            />
            <label className="form__label">Password:</label>
            <span className="form__line"></span>
          </div>
  
          <input type="submit" className="form__submit" value="Log in" />
        </div>
      </form>
    )
}

export default Login