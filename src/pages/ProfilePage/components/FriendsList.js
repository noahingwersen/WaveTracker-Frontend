import Friend from './Friend'

const FriendsList = ({ friends }) => {
  return (
    <div className="friends-list">
      <h2>Friends</h2>
      {friends &&
        friends.map((friend) => {
          return <Friend key={friend.id} username={friend.username} />
        })}
    </div>
  )
}
export default FriendsList
