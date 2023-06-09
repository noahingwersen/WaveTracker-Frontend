import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null
  )
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens')
      ? jwt_decode(localStorage.getItem('authTokens'))
      : null
  )

  const navigate = useNavigate()

  const loginUser = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/profiles/token/', {
        username: e.target.username.value,
        password: e.target.password.value,
      })

      const data = await response.data
      setAuthTokens(data)
      setUser(jwt_decode(data.access))

      // No checkbox if redirected from register page
      if ('saveToken' in e.target) {
        e.target.saveToken.checked
          ? localStorage.setItem('authTokens', JSON.stringify(data))
          : localStorage.removeItem('authTokens')
      }

      navigate('/')
    } catch (error) {
      let message = 'An unknown error has occurred'

      if (error.response.status === 401) {
        message = 'Invalid username or password'
      }

      toast.error(message)
    }
  }

  const registerUser = async (e) => {
    e.preventDefault()

    try {
      await axios.post('/api/profiles/register/', {
        username: e.target.username.value,
        email: e.target.email.value,
        first_name: e.target.firstName.value,
        last_name: e.target.lastName.value,
        password: e.target.password.value,
      })
      loginUser(e)
    } catch (error) {
      if (error?.response?.data) {
        for (const [_, value] of Object.entries(error.response.data)) {
          for (const message of value) {
            toast.error(message)
          }
        }
      } else {
        toast.error('An unknown error has occurred')
      }
    }
  }

  const logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    navigate('/login')
  }

  const updateToken = async () => {
    // Returning a token to use immediately because setAuthTokens updates asynchronously
    // If we try to use the authTokens state right after calling this function, we will use the old token
    let newToken = null
    try {
      const response = await axios.post('/api/profiles/token/refresh/', {
        refresh: authTokens.refresh,
      })

      const data = await response.data

      setAuthTokens(data)
      setUser(jwt_decode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
      newToken = data.access
    } catch (error) {
      toast.error('Unable to refresh token.')
      logoutUser()
    }

    if (loading) {
      setLoading(false)
    }

    return newToken
  }

  const contextData = {
    user: user,
    authTokens: authTokens,
    updateToken: updateToken,
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  }

  useEffect(() => {
    if (loading) {
      if (authTokens) {
        updateToken()
      }
      setLoading(false)
    }

    const fourMinutes = 4 * 60 * 1000
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken()
      }
    }, fourMinutes)

    return () => clearInterval(interval)
  }, [authTokens])

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
