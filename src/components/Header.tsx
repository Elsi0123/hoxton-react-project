import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <h1 className="logo">ABC News</h1>
      <nav className="header-list">
        <ul className="menu">
          <li className="menubar">
            <Link to={"/home"} style={{ color: "white" }}>
              Home
            </Link>
          </li>
          <li className="menubar">
            <Link to={"/news"} style={{ color: "white" }}>
              News
            </Link>
          </li>

          <li className="menubar">
            <Link to={"/sport"} style={{ color: "white" }}>
              Sport
            </Link>
          </li>
          <li className="menubar">
            <Link to={"/reel"} style={{ color: "white" }}>
              Reel
            </Link>
          </li>
          <li className="menubar">
            <Link to={"/worklife"} style={{ color: "white" }}>
              Worklife
            </Link>
          </li>
          <li className="menubar">
            <Link to={"/travel"} style={{ color: "white" }}>
              Travel
            </Link>
          </li>
          <li className="menubar">
            <Link to={"/future"} style={{ color: "white" }}>
              Future
            </Link>
          </li>
          <li className="menubar">
            <Link to={"/culture"} style={{ color: "white" }}>
              Culture
            </Link>
          </li>

          <input className="input" type="text" placeholder=" 🔍 Search abc" />
        </ul>
      </nav>
    </header>
  );
}
