import React, { useState } from "react";
import "./NavBar.css";

function NavBar({ FilterSearch }) {
  const [search, setSearch] = useState("");

  const OnSearch = () => {
    FilterSearch(search);
    setSearch("");
  };
  return (
    <div>
      <div className="Header">
        <div className="continer">
          <ul>
            <li>
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="input"
                value={search}
                type="text"
                placeholder="Enter Food"
              />
              <button onClick={OnSearch}>Search bY Color"</button>
            </li>
          </ul>

          <div className="icon2"></div>
          <div className="icon"></div>
          <div className="icon1">
            <p>DM </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
