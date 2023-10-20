"use client";
import { clearUser } from "@/state/features/userSlice";
import { RootState } from "@/state/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(clearUser());
    router.push("/auth");
    toast.success("Logout successfully");
  };
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-semibold">
            <Link href="/">MyShop</Link>
          </div>
          <ul className="hidden md:flex space-x-4">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/categories">Categories</Link>
            </li>
            <li>
              <Link href="/cart">
                <Fragment>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 19c0 1.104.896 2 2 2s2-.896 2-2M6 5a2 2 0 012-2h8a2 2 0 012 2M6 5l1 10h10l1-10H6z"
                    />
                  </svg>
                  Cart
                </Fragment>
              </Link>
            </li>
            <li>
              {/* <Link href="/account"> */}
              <Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span onClick={handleLogout}>
                  {user == null ? "Account" : user.username}
                </span>
              </Fragment>
              {/* </Link> */}
            </li>
          </ul>
          <div className="md:hidden">
            {/* Mobile menu icon */}
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Toaster />
    </>
  );
};

export default Navbar;
