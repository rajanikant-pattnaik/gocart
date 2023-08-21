import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="bg-blue-200 p-4 md:w-1/4 lg:w-1/5">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Filter by Category */}
      <div className="mb-4">
        <h3 className="text-gray-700 font-semibold mb-2">Category</h3>
        <ul>
          <li className="mb-1">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
               Mens Fashion
            </label>
          </li>
          <li className="mb-1">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Womens Fashion
            </label>
          </li>
          <li className="mb-1">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Electronics
            </label>
          </li>
          {/* Add more categories here */}
        </ul>
      </div>

      {/* Filter by Price Range */}
      <div className="mb-4">
        <h3 className="text-gray-700 font-semibold mb-2">Price Range</h3>
        <input type="range" min="0" max="1000" step="10" className="w-full" />
      </div>

      {/* Filter by Brand */}
      <div>
        <h3 className="text-gray-700 font-semibold mb-2">Brand</h3>
        <select className="w-full">
          <option value="">Select Brand</option>
          <option value="nike">Nike</option>
          <option value="adidas">Adidas</option>
          <option value="apple">Apple</option>
          {/* Add more brands here */}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
