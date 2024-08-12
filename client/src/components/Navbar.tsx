import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between mx-40 my-10">
      <div>Vertexlab</div>
      <div>
        <ul className="flex flex-row">
          <li className="mx-5">About Us</li>
          <li className="mx-5">Hackathon</li>
          <li className="mx-5">For Companies</li>
          <li className="mx-5">Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
