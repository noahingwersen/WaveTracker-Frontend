import FriendRequest from './FriendRequest'
import useApiData from '../../../hooks/useApiData'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const FriendRequestList = ({ addFriend, modifyFriendRequest }) => {
  const [_, serverRequests, errors] = useApiData(
    '/api/profiles/friendrequests/received/'
  )
  const [requests, setRequests] = useState(serverRequests)

  const removeRequest = (id) => {
    setRequests(requests.filter((request) => request.id !== id))
  }

  useEffect(() => {
    setRequests(serverRequests)
  }, [serverRequests])

  useEffect(() => {
    if (errors) {
      toast.error('Unable to fetch friend requests.')
    }
  }, [errors])

  return (
    <div className="friends-list">
      <h2>Friend Requests</h2>
      {requests &&
        requests.map((request) => {
          return (
            <FriendRequest
              key={request.id}
              username={request.sender}
              id={request.id}
              modifyRequest={modifyFriendRequest}
              removeRequest={removeRequest}
              addFriend={addFriend}
            />
          )
        })}
    </div>
  )
}
export default FriendRequestList
