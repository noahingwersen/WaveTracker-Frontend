import { Routes, Route } from 'react-router-dom'
import NotFound from '../../components/NotFound'
import UserProfile from './components/UserProfile'
import useAuth from '../../hooks/useAuth'

const ProfilePage = () => {
  const { user } = useAuth()

  return (
    <Routes>
      <Route element={<NotFound />} path='*' />
      <Route element={<UserProfile />} path={`/${user.username}`} />
    </Routes>
  )
}
export default ProfilePage
