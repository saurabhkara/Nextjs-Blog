import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between my-6">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src="/logo.png" height={35} width={40} />
          <span className="font-bold ml-2 text-primary">Next.js Blog</span>
        </div>
      </Link>

      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Products</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Pricing</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Docs</a>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <a href="#">Company</a>
        </li>
      </ul>

      <ul className="flex items-center">
        <li className="mr-6 font-medium text-gray-600">
          <a href="#" className="hover:text-gray-400">
            Log in
          </a>
        </li>
        <li className="font-medium text-gray-600">
          <a href="#" className="hover:bg-primary-dark transition-all bg-primary px-4 py-2 text-white rounded-sm">
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
}
