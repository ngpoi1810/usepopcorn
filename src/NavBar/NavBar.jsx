import React, { useState } from "react";
import Search from "../components/Search";
import Logo from "./Logo";
import NumResult from "./NumResult";

export default function NavBar({movies}) {
  const [query, setQuery] = useState("");
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <NumResult movies={movies} />
    </nav>
  );
}
