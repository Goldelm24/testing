import React from 'react'
import Link from 'next/link';
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Navbar() {
    const [user] = useAuthState(auth);
  return (
   <nav className= " flex justify-between text-white items-center py-10 shadow-lg rounded-lg">
    <Link href='/'>
        <button className="text-xl border font-bold rounded-lg px-2 ml-10">Home</button>
    </Link>
    {!user &&(
    <Link href='/auth/login'>
        <button className="text-xl border font-bold rounded-lg px-2 mr-10">Sign in</button>
    </Link>
    )}
    {user &&(
        <button className="text-xl border font-bold rounded-lg px-2 mr-10" 
    onClick={() => auth.signOut()}>Sign Out</button>
    )}
   </nav>
  )
}
