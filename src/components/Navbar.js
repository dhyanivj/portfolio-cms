import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="bg-blue-600">
      <div className="containter mx-auto flex justify-between">
        <nav className="flex p-5 ">
          <NavLink
            to="/"
            exact
            className="text-white mr-4 hover:text-black font-bold text-2xl"
          >
            Home
          </NavLink>
          <NavLink
            to="/post"
            className="text-white mr-4 hover:text-black font-bold text-2xl"
            activeClassName="text-white-500 bg-white-700"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="text-white mr-4 hover:text-black font-bold text-2xl"
          >
            Project
          </NavLink>
          <NavLink
            to="/about"
            className="text-white mr-4 hover:text-black font-bold text-2xl"
          >
            About me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
