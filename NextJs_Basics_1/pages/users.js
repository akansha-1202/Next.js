import Layout from "@/components/Layout";
import User from "@/components/User";
import React from "react";

//getStaticProps
function Users({ data }) {
  console.log(data);
  return (
    <Layout>
      <h2>List Of Users : </h2>
      <div>
        {data.map((user, index) => {
          return (
            <ul key={index}>
              <User user={user}/>
            </ul>
          );
        })}
      </div>
    </Layout>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { data },
  };
}
