import api from '../services/api'

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    const response = await api.post('./auth', loginPayload)

    const data = await response.data
    if (data.user) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data })
      localStorage.setItem('crud-token', data.token)
      return data
    }

    dispatch({ type: 'LOGIN_ERROR', error: data.errors[0] })
    return 'kk'
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error.response.data.error })
    return error.response.data.error
  }
}

export async function logout(dispatch) {
  dispatch({ type: 'LOGOUT' })
  localStorage.removeItem('crud-token')
}
