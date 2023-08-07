"use client";

// All the Imports
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

// Sign in Component

// what userdata we want to  gather
export default function Signin() {
  const [user, setUser] = React.useState({
    // what information I'm looking for
    username: "",
    password: "",
    email: "",
  });
  // once user gives me this information , there should be a method to do sign up
  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>

      {/* Form for username */}

      <form className="w-64">
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
          className="w-full px-3 py-2 border rounded mt-2"
        />{" "}
        {/* Here we have called setUser which sets the new username */}
        {/* Form for email */}
        <label htmlFor="email" className="block text-sm font-bold mb-1"></label>
        <input
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
          className="w-full px-3 py-2 border rounded mt-2"
        />{" "}
        {/* Here we have called setUser which sets the new email */}
        {/* Form for password */}
        <label
          htmlFor="password"
          className="block text-sm font-bold mb-1 mt-2"
        ></label>
        <input
          type="text"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          className="w-full px-3 py-2 border rounded mt-2"
        />{" "}
        {/* Here we have called setUser which sets the new password */}
        {/* Button for subbmitting the form */}
        <br />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded"
        >
          Sign up
        </button>
      </form>
      {/* Link to go to the Login page */}
      <span>Already a Member ?</span>
      <Link href="/login"> Login Here</Link>

{/* Return to Home Page */}
<Link href="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2">
          Back to Home !
        </button>
      </Link>

    </div>
  );
}
