"use client"

import axios from "axios";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// Logout functionality to actual logout the user

export default function profilePage() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const logout  = async () => {
try {   
await axios.get('/api/users/logout')
router.push('/login')

} catch (error:any) {
  console.log(error.message);
}
}
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to my Profile</h1>
 
      <form className="text-xl font-bold mb-4">
        <input type="text"
        placeholder="Profile information" />
      </form>

      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={logout}> {/*Calling the Logout Function*/}
          Log out
        </button>
      </Link>

      
    </div>
  );
}
