const ProfilePage = () => {
    const profileData = {
      profilePicture: 'https://example.com/profile-picture.jpg',
      name: 'John Doe',
      id: '123456',
      contact: 'john.doe@example.com',
    };
  
    return (
      <div className="profile-page">
        <img className="profile-picture" src={profileData.profilePicture} alt="Profile" />
        <h1 className="name">{profileData.name}</h1>
        <p className="id">ID: {profileData.id}</p>
        <p className="contact">Contact: {profileData.contact}</p>
      </div>
    );
  };
  
  export default ProfilePage;