import React, { useState } from "react";
import NavBar from "./Componets/NavBar";
import Card from "./Componets/Card";
import { items } from "./Componets/Data/data";
import Header from "./Componets/Header";

function App() {
  const [state, setState] = useState(items);

  // all card by color
  const AllCard = ["all", ...new Set(items.map((item) => item.color))];


  // Filter by color by click
  const FilterCard = (cat) => {
    if (cat === "black") {
      alert("NO Found Card Black");
    
    }else
    if (cat === "all") {
      setState(items);
    } else {
      const newCard = items.filter((item) => item.color === cat);
      setState(newCard);
    }
  };


  // Filter by name  by Search
  const FilterSearch = (word) => {
    if (word !== "") {
      const newCard = items.filter((item) => item.color === word);
      console.log(newCard);
      setState(newCard);
    }
  };

  return (
    <div className="app">
      <NavBar FilterSearch={FilterSearch} />
      <Header FilterCard={FilterCard} AllCard={AllCard} />
      <Card state={state} />
    </div>
  );
}

export default App;
