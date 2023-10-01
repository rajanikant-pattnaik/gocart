import { post } from "@/Types";
import React, { useEffect, useState } from "react";

function Filter({ posts }: { posts: post[] }) {
  const [dataPosts, setdataPosts] = useState<post[]>(posts);
  const [maxPrice, setmaxPrice] = useState<number>(1000000);
  const [minPrice, setminPrice] = useState<number>(0);
  const [owner, setowner] = useState<string[]>([]);
  const ownerData = ["Rj", "Rahul"];
  const handlesubmit = () => {
    setdataPosts(
      posts.filter(
        (data) =>
          data.price >= minPrice &&
          data.price <= maxPrice &&
          (owner.length == 0 ? true : owner.includes(data.owner))
      )
    );
  };
  useEffect(() => {});
  return (
    <>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-4">
        <div className="mb-2 md:mb-0">
          <label htmlFor="minPrice" className="block">
            Min Price
          </label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            value={minPrice}
            onChange={(e) => setminPrice(Number(e.target.value))}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        <div className="mb-2 md:mb-0">
          <label htmlFor="maxPrice" className="block">
            Max Price
          </label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            value={maxPrice}
            onChange={(e) => setmaxPrice(Number(e.target.value))}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:border-blue-500 text-black"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {ownerData.map((d) => (
            <span
              key={d}
              className={`${owner.includes(d)?"bg-pink-600":"bg-blue-600"}  px-2 py-1 rounded `}
              onClick={() => {
                if (owner.includes(d)) {
                  setowner(owner.filter((o) => o !== d));
                } else {
                  setowner([...owner, d]);
                }
              }}
            >
              {d}
            </span>
          ))}
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {dataPosts.length > 0 ? (
            dataPosts.map((post) => (
              <div
                key={post.price}
                className="bg-white rounded-lg shadow-md p-4"
              >
                <p className="text-black text-lg font-semibold">{post.name}</p>
                <p className="text-gray-600">Owner: {post.owner}</p>
                <p className="text-yellow-500">Stars: {post.star}</p>
                <p className="text-green-500">Price: {post.price}</p>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-semibold">Not Present</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Filter;
