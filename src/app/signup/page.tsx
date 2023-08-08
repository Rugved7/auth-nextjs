"use client";

// All the Imports
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";

// what userdata we want to  gather
export default function Signin() {
  // once we setup the API we need to redirect the user to the Login page
  const router = useRouter();
  const [user, setUser] = React.useState({
    // what information I'm looking for
    username: "",
    password: "",
    email: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  // once user gives me this information , there should be a method to do sign up

  const onSignup = async () => {
    // Call the data from the server
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user); // calling the axios .post method to call the data from API Route
      console.log("Sign up Sucessfull", response.data); //giving the response data to the user
      router.push("/login");
     //  now , call the onSignup redirect the user to the login page
     
    } catch (error: any) {
      console.log(error.message,"sign up failed");
    }
    finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <h1>{loading ? "Processing" : "Signup"}</h1>
    <hr />
    <label htmlFor="username">username</label>
    <input 
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="username"
        />
    <label htmlFor="email">email</label>
    <input 
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="email"
        />
    <label htmlFor="password">password</label>
    <input 
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password"
        />
        <button
        onClick={onSignup} 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
        <Link href="/login">Visit login page</Link>

    </div>
  );
}
