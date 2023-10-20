"use client";
import Navbar from "@/components/Navbar";
import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { posts } from "../data";
import Filter from "@/components/Filter";
export default function Home() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
 
  return (
    <>
      <Navbar />
      <div>
        {user !== null ? (
          <div>
            <p>{user.email}</p>
            <p>{user.id}</p>
            <p>{user.username}</p>
            <p>{user.userType}</p>
          </div>
        ) : (
          <div>
            <p>No user</p>
          </div>
        )}
      </div>
      <Filter posts={posts} />
    </>
  );
}
