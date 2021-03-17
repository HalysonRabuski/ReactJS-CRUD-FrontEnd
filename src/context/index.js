import { loginUser, logout } from './actions'
import { AuthProvider, useAuthDispatch, useAuthState } from './context'
import { AuthReducer } from './reducer'

export {
  AuthProvider,
  useAuthState,
  useAuthDispatch,
  loginUser,
  logout,
  AuthReducer,
}
