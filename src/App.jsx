import HomePage from './pages/Home/HomePage'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound'
import GlobalConfig from './components/GlobalConfig'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import PrivateRoute from './utils/PrivateRoute'
import RegisterPage from './pages/Register/RegisterPage'
import SurfSpotsPage from './pages/SurfSpots/SurfSpotsPage'
import SurfSessionsPage from './pages/SurfSessions/SurfSessionsPage'

function App() {
  return (
    <GlobalConfig>
      <>
        <Navbar />
        <div className='box-border pt-16 h-full'>
          <Routes>
            <Route element={<NotFound />} path='*' />
            <Route element={<RegisterPage />} path='/register' />
            <Route element={<LoginPage />} path='/login' />
            <Route
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
              path='/'
              exact
            />
            <Route
              element={
                <PrivateRoute>
                  <SurfSpotsPage />
                </PrivateRoute>
              }
              path='/spots/*'
            />
            <Route
              element={
                <PrivateRoute>
                  <SurfSessionsPage />
                </PrivateRoute>
              }
              path='/sessions/*'
            />
          </Routes>
        </div>
      </>
    </GlobalConfig>
  )
}

export default App
