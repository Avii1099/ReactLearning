// import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Avii1099')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, []);
  let data = useLoaderData();
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-[300px] rounded-md border ">
        <img src={data.avatar_url} alt="Laptop" className="h-[200px] w-full rounded-t-md object-cover" />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {data.name}({data.login}) &nbsp;
          </h1>
          <p className="mt-3 text-sm text-gray-600">{data.bio}</p>
          <div className="mt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Followers: {data.followers}
            </span>
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              Following: {data.following}
            </span>
          </div>
          <a
            type="button"
            href={data.html_url}
            target="_blank"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black text-center"
          >
            Read
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;
