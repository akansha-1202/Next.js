import React, { useEffect, useState } from "react";

//client-side rendering with useEffect
function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/dashboard");
      const data = await res.json();
      setDashboard(data);
      setLoading(false);
    })();
  }, []);
  if (loading) return <h1>Loading......</h1>;

  return (
    <div>
      <h1 className="text-center text-xl p-4 font-bold">DASHBOARD</h1>
      <div className="w-full flex flex-col gap-4 border-2 p-4 bg-green-300">
        <h4>Posts : {dashboard.posts}</h4>
        <h4>Likes : {dashboard.likes}</h4>
        <h4>Follwers : {dashboard.followers}</h4>
        <h4>Following : {dashboard.following}</h4>
      </div>
    </div>
  );
}

export default Dashboard;
