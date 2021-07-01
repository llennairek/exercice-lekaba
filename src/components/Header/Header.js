import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <span>Résultats trouvés pour</span>
      <input type="text" name="" id="search" value="tennis" />
      <input type="text" name="" id="city" value="Villepinte" />
      <button>+ de filtres</button>
    </header>
  );
}

export default Header;
