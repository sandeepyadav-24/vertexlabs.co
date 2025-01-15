"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between mx-40 my-10">
      <div>
        <Link href={"/"}>Vertexlab</Link>
      </div>
      <div>
        <ul className="flex flex-row">
          <li className="mx-5">
            <Link href={"/aboutus"}>About Us</Link>
          </li>
          <li className="mx-5">
            <Link href={"/hackathon"}>Hackathon</Link>
          </li>
          <li className="mx-5">
            <Link href={"/for-companies"}>For Companies</Link>
          </li>
          <li className="mx-5">
            <Link href={"/contactus"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
