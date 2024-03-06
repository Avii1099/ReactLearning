import { useParams, useLocation } from 'react-router-dom';
function User() {
  const { userId } = useParams();
  let location = useLocation();
  console.log('🚀 ~ User ~ location:', location);
  // let SearchParams = URLSearchParams();
  // console.log('🚀 ~ User ~ SearchParams:', SearchParams);
  return <div className="bg-gray-600 text-white text-3xl">User: {userId} </div>;
}

export default User;
