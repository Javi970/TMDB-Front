import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  
  function changeEmail(e) {
    setEmail(e.target.value)
  }
  function changePassword(e) {
    setPassword(e.target.value)
  }
  function changeName(e) {
    setName(e.target.value)
  }

  function handleRegister(e) {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/user/register', {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => res.data)
      .then(() => {
        navigate('/login')
        alert('Congratulations successful registration!')
      })
      .catch((err) => alert('Wrong registration, please try again'))
  }

  return (
    <div>
      <form className="form" onSubmit={handleRegister} autoComplete="off">
        <h2 className="form__title">Create your acount!</h2>
        <p className="form__paragraph">
          You have an account?{' '}
          <a class="form__link" href="www">
            <Link to="/login">Enter here</Link>
          </a>
        </p>

        <div className="form__container">
          <div className="form__group">
            <span className="form__line"></span>
          </div>
          <div class="form__group">
            <input
              required
              name={name}
              onChange={changeName}
              type="text"
              id="user"
              className="form__input"
              placeholder=" "
            />
            <label class="form__label">Name:</label>
            <span className="form__line"></span>
          </div>
          <div class="form__group">
            <input
              required
              email={email}
              onChange={changeEmail}
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
              required
              password={password}
              onChange={changePassword}
              type="password"
              id="password"
              className="form__input"
              placeholder=" "
            />
            <label className="form__label">Password:</label>
            <span className="form__line"></span>
          </div>
          <input type="submit" className="form__submit" value="Sign in" />
        </div>
      </form>
    </div>
  )
}

export default SignUp
