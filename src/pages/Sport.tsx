import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sports } from "../Late";

export function Sport() {
  const [sports, setSports] = useState<Sports[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/sports")
      .then((resp) => resp.json())
      .then((sportsFromServer) => setSports(sportsFromServer));
  }, []);

  return (
    <div className="sportPage">
      <a href="http://127.0.0.1:5173/sport" className="hhref">
        <h3 className="module-title"> SPORT</h3>
      </a>
      <br />
      <br />
      <div className="article-list">
        {sports.map((sports) => (
          <div className="article">
            <img src={sports.src} width="628px" />
            <h1>{sports.title}</h1>
            <br />
            <h4>{sports.description}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
