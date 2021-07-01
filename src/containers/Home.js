import React from "react";
import Header from "../components/Header/Header";
import ItemList from "../components/ItemList/ItemList";
import Map from "../components/Map/Map";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <ItemList />
        <Map />
      </main>
    </>
  );
}

export default Home;
