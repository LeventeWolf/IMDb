import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Movies,
  Actors,
  Directors,
  Studios,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/actors" element={<Actors />} />
      <Route path="/directors" element={<Directors />} />
      <Route path="/studios" element={<Studios />} />
    </Routes>


    <Footer />
  </Router>,

  document.getElementById("root")
);
