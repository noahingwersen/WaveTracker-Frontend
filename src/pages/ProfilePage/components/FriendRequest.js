import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const FriendRequest = ({
  username,
  id,
  addFriend,
  modifyRequest,
  removeRequest,
}) => {
  const acceptRequest = () => {
    modifyRequest({
      modification: 'accept',
      id: id,
      onSuccess: () => {
        addFriend({ username: username })
        removeRequest(id)
      },
    })
  }

  const declineRequest = () => {
    modifyRequest({
      modification: 'decline',
      id: id,
      onSuccess: () => {
        removeRequest(id)
      },
    })
  }

  return (
    <div className="friend">
      <h4>
        <Link style={{ color: 'blue' }} to={'/profile/' + username}>
          {username}
        </Link>
      </h4>
      <Button variant="success" onClick={acceptRequest}>
        Accept
      </Button>{' '}
      <Button variant="danger" onClick={declineRequest}>
        Decline
      </Button>
    </div>
  )
}
export default FriendRequest
