import Link from "next/link";
import React from "react";

export default function profilePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to my Profile</h1>
 
      <form className="text-xl font-bold mb-4">
        <input type="text"
        placeholder="Profile information" />
      </form>

      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2">
          Log out
        </button>
      </Link>

      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2">
          Back to Home !
        </button>
      </Link>
    </div>
  );
}
