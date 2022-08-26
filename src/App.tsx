import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Navigate, Route, Router, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { News } from "./pages/News";
import { Sport } from "./pages/Sport";
import { Home } from "./pages/Home";
import { Reel } from "./pages/Showbiz";
import { Worklife } from "./pages/Tech";
import { Travel } from "./pages/Travel";
import { Future } from "./pages/Future";
import { Culture } from "./pages/Culture";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
       
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/reel" element={<Reel />} />
        <Route path="/worklife" element={<Worklife />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/future" element={<Future />} />
        <Route path="/culture" element={<Culture />} />
      </Routes>
    </div>
  );
}

export default App;
