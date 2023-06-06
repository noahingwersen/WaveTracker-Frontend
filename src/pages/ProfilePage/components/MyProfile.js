import { Circles } from 'react-loader-spinner'
import FriendRequestList from './FriendRequestList'
import FriendsList from './FriendsList'
import { useState, useEffect } from 'react'
import ProfileDetails from './ProfileDetails'
import SearchBar from '../../../components/SearchBar'
import useApiData from '../../../hooks/useApiData'
import useWaveTrackerAxios from '../../../hooks/useWaveTrackerAxios'
import useAuth from '../../../hooks/useAuth'
import { toast } from 'react-toastify'

const MyProfile = ({ modifyFriendRequest }) => {
  const { user } = useAuth()
  const waveAxios = useWaveTrackerAxios()
  const [friendsLoading, existingFriends, friendsErrors] = useApiData(
    '/api/profiles/friends/'
  )
  const [profileLoading, profileData, profileErrors] = useApiData(
    `/api/profiles/profile/${user.username}/`
  )
  const [friends, setFriends] = useState(existingFriends)
  const addFriend = (friend) => {
    setFriends([...friends, friend])
  }

  const loading = friendsLoading | profileLoading

  useEffect(() => {
    setFriends(existingFriends)
  }, [existingFriends])

  useEffect(() => {
    if (friendsErrors) {
      toast.error('Unable to load friends list.')
    }

    if (profileErrors) {
      toast.error('Unable to load profile data.')
    }
  }, [friendsErrors, profileErrors])

  const filterUsers = async (text) => {
    if (!text) {
      return []
    }

    try {
      const response = await waveAxios.get(
        `/api/profiles/usernames/?contains=${text}&limit=15`
      )
      return response.data
    } catch (error) {
      return []
    }
  }

  return (
    <>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperClass="loader"
        visible={loading}
      />
      <div className="page-view">
        <h1>My Profile</h1>
        <div className="profile-container">
          {profileData && <ProfileDetails profileData={profileData} />}
          <FriendRequestList
            modifyFriendRequest={modifyFriendRequest}
            addFriend={addFriend}
          />
          <FriendsList friends={friends} />
          <SearchBar
            placeholder="Search users..."
            onChange={filterUsers}
            timeout={1000}
            valueName="username"
          />
        </div>
      </div>
    </>
  )
}
export default MyProfile
