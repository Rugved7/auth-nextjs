"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Logout functionality to actual logout the user

export default function profilePage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState("null");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/User");
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to my Profile Page</h1>

      <form className="text-xl font-bold mb-4">
        <input type="text" placeholder="Profile information" />
      </form>

      <h2>
        {data === "null" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>

      <Link href="/">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
          onClick={logout}
        >
          {" "}
          {/*Calling the Logout Function*/}
          Log out
        </button>
      </Link>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={getUserDetails}
      >
        {" "}
        {/*Calling the getUserDetails Function*/}
        Get User Details
      </button>
    </div>
  );
}
