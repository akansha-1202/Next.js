import Layout from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Welcome to My Next.js Website</h1>
      </div>
    </Layout>
  );
}
