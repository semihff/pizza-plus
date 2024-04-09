import React from "react";
import Navbar from "../../components/navbar";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <main>
        <section>
          <h1>Pizza Plus</h1>
          <p>Bir Yayıncının Elinden...</p>
          <span>Muhammed Demirel</span>
        </section>
        <aside>
          <img className="pizza" src="/public/images/pizza.png" alt="" />
        </aside>
      </main>
    </div>
  );
};

export default Home;
