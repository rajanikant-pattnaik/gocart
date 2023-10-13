"use client";
import Navbar from "@/components/Navbar";
import { RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";
import { posts } from "../data";
import Filter from "@/components/Filter";
import { useEffect } from "react";
import axios from "axios";
import { UserState } from "@/Types";
import { setUser } from "@/state/features/userSlice";
export default function Home() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const getDetails = async () => {
      const res = await axios.get("/api/getToken");
      // console.log(res.data);
      if (res.data.data === "No user") {
        // console.log(res.data);
        console.log("No User");
      } else {
        const tokenData = res.data.data;
        const type = tokenData.userType;
        const userVal: UserState = {
          user: {
            username: tokenData.username,
            id: tokenData.id,
            email: tokenData.email,
            userType: type === undefined ? "user" : "admin",
          },
        };
        dispatch(setUser(userVal.user));
      }
    };
    getDetails();
  }, [dispatch]);
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
