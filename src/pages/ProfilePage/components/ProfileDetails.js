const ProfileDetails = ({ profileData }) => {
  const image =
    'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/WNXQ2BTOGNLZ3M2OOMQZAJLLIY.jpg'

  return (
    <div className="profile-details">
      <img src={image} className="profile-picture" />
      <h2>
        <b>{`${profileData.first_name} ${profileData.last_name}`}</b>
      </h2>
      <strong style={{ fontSize: '20px' }}>{profileData.username}</strong>
      <br />
      <strong>{profileData.email}</strong>
      <p>
        Surf Spots: {profileData.total_surf_spots}
        <br />
        Surf Sessions: {profileData.total_surf_sessions}
      </p>
    </div>
  )
}
export default ProfileDetails
