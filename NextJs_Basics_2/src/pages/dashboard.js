import { getSession } from "next-auth/react";
import React from "react";

function Dashboard() {
  const session = getSession()
  return <div>Dashboard</div>;
}

export default Dashboard;