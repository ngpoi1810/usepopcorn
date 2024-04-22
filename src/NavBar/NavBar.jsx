import React, { useState } from "react";
import Search from "../components/Search";
import Logo from "./Logo";
import NumResult from "./NumResult";

export default function NavBar({ movies, children }) {
  
  return (
    <nav className="nav-bar">
      
      {children}
    </nav>
  );
}
