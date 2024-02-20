import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

//Server-side Rendering
function NewsArticles({ news }) {
  return (
    <Layout>
      <h1>List of News Articles</h1>
      <div className="flex flex-wrap gap-8">
        {news?.map((news, index) => (
          <div className="relative flex w-90 flex-col rounded-xl bg-pink-100 bg-clip-border text-gray-700 shadow-md" key={index}>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {index + 1}. {news.title}
              </h5>
            </div>
            <Link href={`/news/${news.category}`} className="p-6 pt-0">
              <button
                className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-light="true"
              >
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Link href="/">
        <button>Back To Home</button>
      </Link>
    </Layout>
  );
}

export default NewsArticles;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
};

//If we are using getServerSideProps then we can also render a filtered list on the basis of category or even an individual item by id.
