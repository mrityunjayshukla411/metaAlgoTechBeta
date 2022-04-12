import React from "react";
import MetaalCard from "./metaal-card";
import "./metaal.css";
function Metaal() {
  return (
    <section className="metaal-home vh-100 container">
      <div>
        <h1 className="text-dark metaal-h1 display-3">MetaALs</h1>
      </div>
      <div className="row">
        <MetaalCard />
        <MetaalCard />
        <MetaalCard />
      </div>
      <a href="/product" className="nav-link nav-button float-end explore-more-btn">Explore more</a>
    </section>
  );
}
export default Metaal;
