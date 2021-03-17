import React from 'react'
import './styles.css'
import { logout, useAuthDispatch } from '../../../context'

function TopBar() {
  const dispatch = useAuthDispatch()

  function handleLogout(e) {
    e.preventDefault()
    const response = logout(dispatch)
    console.log(response)
  }

  return (
    <div className="d-flex col-12 top-bar">
      <p className="text-white font-weight-bold text-center">ReactJS</p>
      <button
        type="button"
        onClick={(e) => handleLogout(e)}
        className="ml-auto font-weight-bold btn btn-dark"
      >
        Logout
      </button>
    </div>
  )
}

export default TopBar
