import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuthState } from './context'
import Template from './components/Template'
import TopBar from './components/Template/TopBar'
import Sidebar from './components/Template/Sidebar'
import SignIn from './pages/SignIn'
import routes from './routes'

function App() {
  const userDetails = useAuthState()

  return (
    <div>
      <Router>
        {userDetails.token ? (
          <div className="col-12 container">
            <TopBar />
            <div className="d-flex">
              <Sidebar />
              <Switch>
                {routes.map((route) => (
                  <Route
                    key={route.component}
                    path={route.path}
                    // exact={route.exact}
                    component={() => (
                      <Template
                        title={route.title}
                        subtitle={route.subtitle}
                        component={<route.component />}
                      />
                    )}
                  />
                ))}
              </Switch>
            </div>
          </div>
        ) : (
          <SignIn />
        )}
      </Router>
    </div>
  )
}

export default App
