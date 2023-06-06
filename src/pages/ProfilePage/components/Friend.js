import { Link } from 'react-router-dom'

const Friend = ({ username }) => {
  return (
    <div className="friend">
      <h4>
        <Link style={{ color: 'blue' }} to={'/profile/' + username}>
          {username}
        </Link>
      </h4>
      <p>Some text below each friend</p>
    </div>
  )
}
export default Friend
