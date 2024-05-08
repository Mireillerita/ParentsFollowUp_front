import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="bg-blue-700 text-white flex flex-row justify-around">
      <div className="flex flex-row justify-center">
        <img src="./logo.png" alt="" />
        <div className="flex flex-row text-white">
          <div className="">
            <NavLink to="/Home">Home</NavLink>
          </div>
          <div className="">
            <NavLink to="/About">About</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
