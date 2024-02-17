import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="flex bg-gray-800 text-white top-0 py-3 flex-wrap justify-around bg-silver">
      <h1 className="text-lg font-semibold">NEXT.JS</h1>
      <ul className="flex gap-[40px] text-m">
        <li>
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-blue-500">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/product" className="hover:text-blue-500">
            Products
          </Link>
        </li>
        <li>
          <Link href="/posts" className="hover:text-blue-500">
            Posts
          </Link>
        </li>
        <li>
          <Link href="/news" className="hover:text-blue-500">
            News
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
