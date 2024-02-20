import Layout from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Welcome to My Next.js Website</h1>
        <b>NOTE </b>: You can go through any tab but for accessing in{" "}
        <i>Products</i>, <i>Posts</i>, <i>News</i>, <i>Events</i> tab firstly
        you have to run "npm run serve-json" in terminal else it will give
        error.
      </div>
    </Layout>
  );
}
