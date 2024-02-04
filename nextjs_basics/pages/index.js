import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      Home
      <div className="w-[120px] flex gap-x-4 bg-gray-200">
        <Link href="/blog">Blog</Link>
        <Link href="/product">Products</Link>
      </div>
    </main>
  );
}
