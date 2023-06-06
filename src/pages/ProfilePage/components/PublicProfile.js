import { useState, useEffect } from 'react'
import useAuth from '../../../hooks/useAuth'
import useWaveTrackerAxios from '../../../hooks/useWaveTrackerAxios'
import Button from 'react-bootstrap/Button'
import FriendButton from './FriendButton'
import { toast } from 'react-toastify'

const PublicProfile = ({ modifyFriendRequest }) => {
  const { user } = useAuth()
  const waveAxios = useWaveTrackerAxios()
  const [friendLoading, setFriendLoading] = useState(true)
  const [requestLoading, setRequestLoading] = useState(true)
  const [isFriend, setIsFriend] = useState(false)
  const [requestSent, setRequestSent] = useState(false)
  const [requestReceived, setRequestReceived] = useState(false)
  const [friendRequest, setFriendRequest] = useState()
  const profile = window.location.pathname.split('/profile/')[1]

  const loading = friendLoading || requestLoading

  useEffect(() => {
    const checkFriendship = async () => {
      setFriendLoading(true)
      try {
        const response = await waveAxios.get(
          `/api/profiles/friends/?username=${profile}`
        )
        const data = await response.data

        setIsFriend(data.length > 0)
      } catch (errors) {
        toast.error(`Unable to check friendship with ${profile}`)
      }
      setFriendLoading(false)
    }

    const checkRequest = async () => {
      setRequestLoading(true)
      try {
        const response = await waveAxios.get(
          `/api/profiles/friendrequests/?user=${profile}`
        )

        const data = await response.data
        if (data.length > 0) {
          // Should only be 1 request here. If user has sent/received a friend request from this profile.
          // there should not be an option to send another
          setFriendRequest(data[0])
          setRequestSent(data[0].sender === user.user_id)
          setRequestReceived(data[0].receiver === user.user_id)
        } else {
          setRequestSent(false)
          setRequestReceived(false)
        }
      } catch (errors) {
        toast.error(`Unable to send friend request to ${profile}`)
      }

      setRequestLoading(false)
    }

    checkFriendship()
    checkRequest()
  }, [requestSent])

  const addFriend = async () => {
    try {
      await waveAxios.post('/api/profiles/friendrequests/', {
        sender: user.username,
        receiver: profile,
      })
      setRequestSent(true)
    } catch (errors) {
      toast.error('Unable to add friend.')
    }
  }

  const removeFriend = async () => {
    try {
      await waveAxios.delete(
        `http://localhost:8000/api/profiles/friends/${profile}/`
      )
      setIsFriend(false)
    } catch (errors) {
      toast.error('Unable to remove friend')
    }
  }

  const acceptRequest = () => {
    modifyFriendRequest({
      modification: 'accept',
      id: friendRequest.id,
      onSuccess: () => {
        setIsFriend(true)
        setRequestReceived(false)
      },
    })
  }

  const declineRequest = () => {
    modifyFriendRequest({
      modification: 'decline',
      id: friendRequest.id,
      onSuccess: () => {
        setRequestReceived(false)
      },
    })
  }

  const cancelRequest = () => {
    modifyFriendRequest({
      modification: 'cancel',
      id: friendRequest.id,
      onSuccess: () => {
        setRequestSent(false)
      },
    })
  }

  return (
    <div className="page-view">
      <h1>{profile}</h1>
      {loading ? (
        <Button variant="secondary" disabled>
          Loading...
        </Button>
      ) : (
        <FriendButton
          addFriend={addFriend}
          removeFriend={removeFriend}
          isFriend={isFriend}
          requestSent={requestSent}
          requestReceived={requestReceived}
          acceptRequest={acceptRequest}
          declineRequest={declineRequest}
          cancelRequest={cancelRequest}
        />
      )}
    </div>
  )
}
export default PublicProfile
