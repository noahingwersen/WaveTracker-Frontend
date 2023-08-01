import HomePage from './pages/Home/HomePage'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import NotFound from './components/NotFound'
import GlobalConfig from './components/GlobalConfig'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import PrivateRoute from './utils/PrivateRoute'

function App() {
  return (
    <GlobalConfig>
      <>
        <Navbar />
        <div className='box-border pt-16 h-full'>
          <Routes>
            <Route element={<NotFound />} path='*' />
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
          </Routes>
        </div>
      </>
    </GlobalConfig>
  )
}

export default App
