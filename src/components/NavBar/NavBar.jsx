import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userLogOut } from '../../store/user'
import SideBar from '../SideBar/SideBar'

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const handlerLogOut = () => {
    window.localStorage.removeItem("token");
    dispatch(userLogOut())
    navigate("/")
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            TMDB
          </a>

          {user.id ? (
            <>
              <button>
                <Link
                  className="nav-link buttons"
                  to="/"
                  onClick={handlerLogOut}
                >
                  Logout
                </Link>
              </button>
            </>
          ) : (
            <>
              <button>
                <Link className="nav-link buttons" to="/register">
                  Register
                </Link>
              </button>
              <button>
                <Link className="nav-link buttons" to="/login">
                  Login
                </Link>
              </button>
            </>
          )}

          <SideBar />
        </div>
      </nav>
    </div>
  )
}

export default NavBar
