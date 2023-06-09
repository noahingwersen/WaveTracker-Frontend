import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './context/AuthContext'
import MainNavbar from './components/MainNavbar'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import MainPage from './pages/MainPage/MainPage'
import PrivateRoute from './utils/PrivateRoute'
import SurfSpotPage from './pages/SurfSpotPage/SurfSpotPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import SurfSessionPage from './pages/SurfSessionPage/SurfSessionPage'
import InsightsPage from './pages/InsightsPage/InsightsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <MainNavbar />
        <Routes>
          <Route
            element={<PrivateRoute children={<MainPage />} />}
            path="/"
            exact
          />
          <Route
            element={<PrivateRoute children={<SurfSpotPage />} />}
            path="/spots/*"
          />
          <Route
            element={<PrivateRoute children={<SurfSessionPage />} />}
            path="/sessions"
          />
          <Route
            element={<PrivateRoute children={<ProfilePage />} />}
            path="/profile/*"
          />
          <Route
            element={<PrivateRoute children={<InsightsPage />} />}
            path="/insights"
          />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
        />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
