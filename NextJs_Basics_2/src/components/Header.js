import React from "react";
import Link from "next/link";
import { useSession,signIn, signOut } from "next-auth/react";

function Header() {
  const session = useSession();
  console.log("session : ", session);
  return (
    <div className="layout-header">
      <div className="flex text-white top-0 py-3 flex-wrap justify-around bg-silver">
        <h1 className="text-lg font-semibold">NEXT AUTH</h1>
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
            <Link href="/dogs" className="hover:text-blue-500">
              Dogs
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-blue-500">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>
          {session.data === null && (
            <li>
              <Link
                href="/api/auth/signin"
                className="hover:text-blue-500"
                onClick={signIn}
              >
                Sign In
              </Link>
            </li>
          )}
          {session.data && (
            <li>
              <Link
                href="/api/auth/signout"
                className="hover:text-blue-500"
                onClick={signOut}
              >
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
