import React from "react";
import "./Hader.css";

function Header({ FilterCard, AllCard }) {
  const itemsCat = AllCard.length ? (
    AllCard.map((cat) => {
      return (
        <div key={cat.id} className="header">
          <div className="header-h">
            <button onClick={() => OnFilter(cat)}>{cat}</button>
          </div>
        </div>
      );
    })
  ) : (
    <h1>No Found Card! </h1>
  );
  const OnFilter = (cat) => {
    FilterCard(cat);
  };
  return (
    <div>
      <h2 className="t-titel"><u>List Headphone</u></h2>
     
      <ul>
        <li>{itemsCat}</li>
      </ul>
    </div>
  );
}

export default Header;
