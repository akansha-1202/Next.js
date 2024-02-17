import React from "react";

function Category({ news, category }) {
  return (
    <div>
      <h1>Showing News on {category}</h1>

      {news?.map((article, index) => (
        <div
          key={index}
          className="relative flex w-96 flex-col rounded-xl bg-red-200 bg-clip-border text-gray-700 shadow-md"
        >
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {index + 1}. {article.title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {article.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;

export const getServerSideProps = async (context) => {
  const { params, req, res, query } = context;
  const { category } = params;
  // console.log("query : ", query);
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: { news: data, category },
  };
};
