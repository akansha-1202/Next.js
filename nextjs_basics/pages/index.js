import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      Home
      <div className="w-[15%] flex gap-x-4 bg-gray-200">
        <Link href="/blog" className="hover:text-blue-500">
          Blog
        </Link>
        <Link href="/product" className="hover:text-blue-500">
          Products
        </Link>
        <Link href="/posts" className="hover:text-blue-500">
          Posts
        </Link>
      </div>
    </main>
  );
}
