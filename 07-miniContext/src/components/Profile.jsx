import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user.userName) {
    return <div>Please Login</div>;
  }
  return <div>WelCome: {user.userName}</div>;
}

export default Profile;
