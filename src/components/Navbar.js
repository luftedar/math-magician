import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/calculator">Calculator</a>
        <a href="/quote">Quote</a>
      </div>
    </div>
  )
}

export default Navbar;