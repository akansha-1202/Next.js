import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";

//Pre-rendering + Client-side rendering
function Events({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  async function getFilter() {
    try{
    const res = await fetch(`http://localhost:4000/events?category=sports`);
    const data = await res.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, {shallow:true});
    } catch (err){
      console.log("There is some error....!!!");
    }
  }

  return (
    <Layout>
      <h1 className="text-center text-xl font-bold text-red-300">
        Table Of Events
      </h1>
      <button
        onClick={getFilter}
        className="border border-black bg-gray-400 rounded-md"
      >
        SPORTS
      </button>
      <table className="border border-spacing-8  border-slate-500 p-4">
        <thead>
          <tr>
            <th className="border border-slate-600">ID</th>
            <th className="border border-slate-600">TITLE</th>
            <th className="border border-slate-600">CATEGORY</th>
            <th className="border border-slate-600">DATE</th>
          </tr>
        </thead>
        <tbody>
          {events?.map((event, index) => (
            <tr key={index} className="border border-slate-600">
              <td className="border border-slate-700">{event.id}</td>
              <td className="border border-slate-700">{event.title}</td>
              <td className="border border-slate-700">{event.category}</td>
              <td className="border border-slate-700">{event.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Events;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { catgeory } = query;
  const queryCategory = catgeory ? "category=sports" : " ";
  const res = await fetch(`http://localhost:4000/events?${queryCategory}`);
  const data = await res.json();
  return {
    props: {
      eventList: data,
    },
  };
};
