import Button from 'react-bootstrap/Button'

const FriendButton = ({
  isFriend,
  requestSent,
  requestReceived,
  addFriend,
  removeFriend,
  acceptRequest,
  declineRequest,
  cancelRequest,
}) => {
  return (
    <>
      {isFriend ? (
        <Button variant="danger" onClick={removeFriend}>
          Remove Friend
        </Button>
      ) : requestSent ? (
        <>
          <Button variant="warning" disabled>
            Request Pending
          </Button>{' '}
          <Button variant="danger" onClick={cancelRequest}>
            Cancel
          </Button>{' '}
        </>
      ) : requestReceived ? (
        <>
          <Button variant="success" onClick={acceptRequest}>
            Accept
          </Button>{' '}
          <Button variant="danger" onClick={declineRequest}>
            Decline
          </Button>
        </>
      ) : (
        <Button variant="success" onClick={addFriend}>
          Add Friend
        </Button>
      )}
    </>
  )
}
export default FriendButton
