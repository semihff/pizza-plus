import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "./menu.css";
import { products } from "../../../constants";

const Menu = () => {
  const [selectedPizza, SetSelectedPizza] = useState({
    id: 1,
    name: "Salsiccia Pizza",
    prize: "289",
    contents:
      "Mozzarella peyniri, domates sosu, sucuk, mısır, kırmızıbiber, yeşil biber",
    img: "/images/salsiccia.png",
  });
  const changePizza = (id) => {
    const selectedPizzaId = products.find((pizza) => pizza.id === id);
    SetSelectedPizza(selectedPizzaId);
  };
  return (
    <div className="menu-wrapper">
      <Navbar />
      <div className="menu-container">
        <div className="menu-name">
          <h1>Menü</h1>
        </div>
        <main>
          <div className="prize">
            <h1>Pizzalar</h1>
            <div className="pizza-wrapper">
              {products.map((item) => (
                <div
                  onClick={() => changePizza(item.id)}
                  className={`pizza ${
                    selectedPizza.id === item.id && "selected-pizza"
                  } `}
                  key={item.id}
                >
                  <span className="pizza-name">{item.name}</span>
                  <div className="seprator" />
                  <span className="pizza-prize">{item.prize} TL</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pizza-details">
            <h1>{selectedPizza.name}</h1>
            <div className="selected-img">
              <img src={selectedPizza.img} alt="" />
            </div>
            <p>{selectedPizza.contents}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Menu;
