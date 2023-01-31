import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'
import { userLogin } from './store/user'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/user/me', { withCredentials: true })
      .then((res) => dispatch(userLogin(res.data)))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        {user.id ? (
          <>
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/movies" element={<HomeMovies />} />
            <Route path="/movies/:id" element={<IndividualMovie />} />
            <Route path="/favorites" element={<HeaderFavorites />} /> */}
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/movies" element={<HomeMovies />} /> */}

            {/* <Route path="/movies/:id" element={<IndividualMovie />} /> */}
          </>
        )}
      </Routes>
    </div>
  )
}

export default App
