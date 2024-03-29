import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome To Next-Auth !</h1>

      <Link href="/signup">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2">
          Sign up Here
        </button>
      </Link>

      <Link href="/login">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Login Here
        </button>
      </Link>
    </div>
  );
}
