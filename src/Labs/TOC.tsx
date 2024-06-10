import { useLocation, Link } from "react-router-dom";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link id="wd-a" to="/Labs" className="nav-link">
          Labs
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a1" to="/Labs/Lab1" className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a2" to="/Labs/Lab2" className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a3" to="/Labs/Lab3" className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a3" to="/Labs/Lab4" className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
          Lab 4
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-a3" to="/Labs/Lab5" className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
          Lab 5
        </Link>
      </li>
      <li className="nav-item">
        <Link id="wd-k" to="/Kanbas" className="nav-link">
          Kanbas
        </Link>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/spencerbelsky" className="nav-link">
          My GitHub
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://kanbas-node-server-app-ho8c.onrender.com/" className="nav-link">
          Render Deployment
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-k" href="https://github.com/spencerbelsky/kanbas-node-server-app" className="nav-link">
          Node GitHub Repo
        </a>
      </li>
    </ul>
    
  );
}
