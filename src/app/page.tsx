"use client";
import Navbar from "@/components/Navbar";
// import Filter from "@/components/filter";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";
import {posts} from '../data'
import Filter from "@/components/Filter";
export default function Home() {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
      <Navbar />
      <div>
        {
          user!==null?(
            <div>
             <p>{user.email}</p>
             <p>{user.password}</p>
            </div>
          ):(
            <div>
               <p>Empty</p>
            </div>
          )
        }
      </div>
      <Filter posts={posts}/>
    </>
  );
}
