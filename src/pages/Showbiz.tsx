import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rills } from "../Late";

export function Reel() {
  const [rills, setRills] = useState<Rills[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/rills")
      .then((resp) => resp.json())
      .then((rillsFromServer) => setRills(rillsFromServer));
  }, []);

  return (
    <div className="showbizPage">
      <a href="http://127.0.0.1:5173/sport" className="hhref">
        <h3 className="module-title">SHOWBIZ</h3>
      </a>
      <br />
      <br />
      <div className="article-list">
        {rills.map((rills) => (
          <div className="article">
            <img src={rills.src} width="628px" />
            <h1>{rills.title}</h1>
            <br />
            <h4>{rills.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
