"use client"
import Navbar from "@/components/Navbar";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
      <Navbar/>
      <div>
      {user ? (
        <div>
          <p>Name: {user.email}</p>
          <p>Email: {user.password}</p>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </div>
    </>
  )
}
