import React from "react";
import Navbar from "../../components/navbar";
import "./menu.css";

const products = [
  {
    id: 1,
    name: "Salsiccia Pizza",
    prize: "289",
    contents:
      "Mozzarella peyniri, domates sosu, sucuk, mısır, kırmızıbiber, yeşil biber",
    img: "/src/images/salsiccia.png",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    prize: "195",
    contents:
      "Mozzarella peyniri, domates sosu, çeri domates, parmesan peyniri, fesleğen",
    img: "/src/images/margherita.png",
  },
  {
    id: 3,
    name: "Formaggi Pizza",
    prize: "318",
    contents:
      "Mozzarella peyniri, beyaz sos, taze mozzarella, cheddar peyniri, beyaz peynir, parmesan peyniri, fesleğen",
    img: "/src/images/formaggi.png",
  },
  {
    id: 4,
    name: "Al Funghi Pizza",
    prize: "242",
    contents: "Mozzarella peyniri, domates sosu, mantar, sarımsaklı zeytinyağı",
    img: "/src/images/alfunghi.png",
  },
  {
    id: 5,
    name: "Mediterranea Pizza",
    prize: "263",
    contents: "Mozzarella peyniri, domates sosu, siyah zeytin, fesleğen, kekik",
    img: "/src/images/mediterranea.png",
  },
  {
    id: 6,
    name: "Tonna Cipolla Pizza",
    prize: "195",
    contents: "Mozzarella peyniri, domates sosu, ton balığı, mor soğan, mısır",
    img: "/src/images/tonnacipo.png",
  },
  {
    id: 7,
    name: "Mixed Pizza",
    prize: "318",
    contents:
      "Mozzarella peyniri, domates sosu, sucuk, jambon, siyah zeytin, mantar, mısır, yeşil biber, kırmızı biber, parmesan peyniri",
    img: "/src/images/mixed.png",
  },
  {
    id: 8,
    name: "Bufala Pizza",
    prize: "242",
    contents:
      "Mozzarella peyniri, domates sosu, taze mozzarella peyniri, parmesan peyniri, fesleğen",
    img: "/src/images/bufala.png",
  },
  {
    id: 9,
    name: "Chicken BBQ Pizza",
    prize: "263",
    contents:
      "Mozzarella peyniri, domates sosu, tavuk parçaları, mantar, barbekü sos",
    img: "/src/images/chickenbbq.png",
  },
  {
    id: 10,
    name: "Vegetarian Pizza",
    prize: "195",
    contents:
      "Mozzarella peyniri, domates sosu, yeşil biber, kırmızı biber, mantar, közlenmiş patlıcan, parmesan peyniri, sarımsaklı zeytinyağı",
    img: "/src/images/vegetarian.png",
  },
];
const Menu = () => {
  return (
    <div className="menu-wrapper">
      <Navbar />
      <div className="menu-container">
        <div className="menu-name">
          <h1>Menü</h1>
        </div>
        <main>
          <img className="half-pizza" src="/src/images/halfpizza.png" alt="" />
          <div className="prize">
            <h1>Pizzalar</h1>
            {products.map((item) => (
              <div className="pizza" key={item.id}>
                <span>{item.name}</span>
                <span>....................</span>
                <span>{item.prize}</span>
              </div>
            ))}
          </div>
          <div className="pizza-details"></div>
        </main>
      </div>
    </div>
  );
};

export default Menu;
