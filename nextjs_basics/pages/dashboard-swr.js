import React from 'react'
import useSWR from 'swr'

//client-side rendering with SWR
function DashboardSWR() {
    const fetcher = async() => {
        const res = await fetch(`http://localhost:4000/dashboard`);
        const data = await res.json();
        return data
    }

    const {data, error} = useSWR("dashboard",fetcher);

    if(error) return "There is some error..!!!";

    if(!data) return "Loading.....!!!!"
  return (
    <div>
      <h1 className="text-center text-xl p-4 font-bold">DASHBOARD</h1>
      <div className="w-full flex flex-col gap-4 border-2 p-4 bg-purple-300">
        <h4>Posts : {data.posts}</h4>
        <h4>Likes : {data.likes}</h4>
        <h4>Follwers : {data.followers}</h4>
        <h4>Following : {data.following}</h4>
      </div>
    </div>
  );
}

export default DashboardSWR
