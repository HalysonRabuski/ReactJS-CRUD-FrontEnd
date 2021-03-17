import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'
import { loginUser, useAuthState, useAuthDispatch } from '../../context'

function SignIn() {
  const history = useHistory()
  const dispatch = useAuthDispatch()
  const { loading, errorMessage } = useAuthState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await loginUser(dispatch, {
        email,
        password,
      })
      if (!response.user) return
      // console.log(history)
      history.push('produtos')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container_login">
      <div className="card p-5 form-container">
        <h2 className="title mb-3">React</h2>
        {errorMessage ? <p className="error">{errorMessage}</p> : null}
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email" className="title">
            Email
            <input
              className="form-control input mb-2 col-12"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="digite o email cadastrado"
            />
          </label>
          <label htmlFor="senha" className="title">
            Senha
            <input
              className="form-control input"
              name="senha"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="digite sua senha"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-info float-right mt-3"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
