import React from "react";
import { Link, NavLink, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <p>All the Links: </p>
        <ul>
          <li>
            <NavLink
              to={"products"}
              replace
              className={({ isActive }) =>
                `text-blue-600 hover:underline ${
                  isActive && "bg-blue-600 px-4 py-2 text-white"
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="users"
              replace
              className={({ isActive }) =>
                `text-blue-600 hover:underline ${
                  isActive && "bg-blue-600 px-4 py-2 text-white"
                }`
              }
            >
              Users
            </NavLink>
          </li>

          {/* <li>
            <Link
              to={"products"}
              className="text-blue-600 hover:text-purple-600 hover:underline"
            >
              <div>Products</div>
            </Link>
          </li>
          <li>
            <Link
              to="users"
              className="text-blue-600 hover:text-purple-600 hover:underline"
            >
              Users
            </Link>
          </li> */}
        </ul>
      </nav>

      <p>This is a dashboard</p>

      <Outlet />

      <p>Footer from Dashboard</p>
    </div>
  );
};

export default Dashboard;
