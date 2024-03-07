import { useParams, useLocation } from 'react-router-dom';
function User() {
  const { userId } = useParams();
  let location = useLocation();
  let queryParams = new URLSearchParams(location.search);
  let data = queryParams.get('data');
  console.log('🚀 ~ User ~ location:', data, queryParams);
  // let SearchParams = URLSearchParams();
  // console.log('🚀 ~ User ~ SearchParams:', SearchParams);
  return <div className="bg-gray-600 text-white text-3xl">User: {userId} </div>;
}

export default User;
