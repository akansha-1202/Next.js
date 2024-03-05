import Head from "next/head";
import React from "react";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="about nextjs" />
      </Head>
      <div className=" flex flex-col">
        <h1>About</h1>
        <div>
          Name : {process.env.DB_NAME}, Password : {process.env.DB_PASSWORD},
          <br />
          Username : {process.env.NEXT_PUBLIC_USERNAME}
        </div>
      </div>
    </>
  );
}

export default About;

export const getServerSideProps = async () => {
  console.log(
    `Database is connected using name = ${process.env.DB_NAME} and password = ${process.env.DB_PASSWORD}`
  );
  return {
    props: {
      data: "hello",
    },
  };
};
