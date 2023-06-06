import { Routes, Route } from 'react-router-dom'
import { toast } from 'react-toastify'
import useAuth from '../../hooks/useAuth'
import useWaveTrackerAxios from '../../hooks/useWaveTrackerAxios'
import MyProfile from './components/MyProfile'
import PublicProfile from './components/PublicProfile'

const ProfilePage = () => {
  const { user } = useAuth()
  const waveAxios = useWaveTrackerAxios()

  const modifyFriendRequest = async ({ modification, id, onSuccess }) => {
    try {
      await waveAxios.put(`/api/profiles/friendrequests/${id}/`, {
        modification: modification,
      })

      onSuccess()
    } catch (error) {
      toast.error('Unable to modify friend request.')
    }
  }

  return (
    <Routes>
      <Route
        element={<MyProfile modifyFriendRequest={modifyFriendRequest} />}
        path={'/' + user.username}
      ></Route>
      <Route
        element={<PublicProfile modifyFriendRequest={modifyFriendRequest} />}
        path="/*"
      />
    </Routes>
  )
}
export default ProfilePage
