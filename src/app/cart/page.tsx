"use client"
import Navbar from '@/components/Navbar';
// import { Providers } from '@/state/Provider';
import { RootState } from '@/state/store';
import React from 'react'
import { useSelector } from 'react-redux';

const Page = () => {
    const user = useSelector((state: RootState) => state.user.user);
  return (
    <>
    {/* <Providers> */}
    <Navbar />
      <div>
        {user !== null ? (
          <div>
            <p>----{user.email}----</p>
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
      {/* </Providers> */}
    </>
  )
}

export default Page