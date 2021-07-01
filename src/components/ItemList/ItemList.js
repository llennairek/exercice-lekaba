import React from "react";
import data from "../../assets/data/data.json";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList() {
  return (
    <div className="item-list">
      {data.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ItemList;
