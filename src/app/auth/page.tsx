"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setUser } from "@/state/features/userSlice";
import axios from "axios";
import { UserState } from "@/Types";

const Page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setemail] = useState<string>("");
  const [username, setusername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setisLogin] = useState(true);
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post("/api/users/user/login", {
          email,
          password,
        });
        const value = res.data;
        const tokenData = value.tokenData;
        const userVal: UserState = {
          user: {
            username: tokenData.username,
            id: tokenData.id,
            email: tokenData.email,
            userType: "user",
          },
        };
        dispatch(setUser(userVal.user));
        router.push("/");
      } else {
        const res = await axios.post("/api/users/user/signup", {
          username,
          email,
          password,
        });
        const value = res.data;
        console.log(value);
        setisLogin(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setusername("");
      setemail("");
      setPassword("");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">
            {isLogin ? "Login" : "Register"}
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={username}
                className={`${
                  isLogin ? "hidden" : ""
                } appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Name"
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm ">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              // type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleLogin}
            >
              {isLogin ? "sign in" : "register"}
            </button>
          </div>
          <div>
            <p onClick={() => setisLogin(!isLogin)} className="text-blue-700">
              want to {`${isLogin ? "Register" : "Login"}`}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
