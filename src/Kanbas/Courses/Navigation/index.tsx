import "./index.css";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const currParams = useParams();
  
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={link} className={`list-group-item border border-0
              ${pathname.includes(link) ? "text-black active" : "text-danger"}`}>
          <br />
          {link}
        </Link>
      ))}
    </div>
  );
}