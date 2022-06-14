import { Link } from "react-router-dom";
//styles
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        Logo
      </Link>
      <nav className="header-nav">
        <ul className="header-list">
          <li className="header-item">
            <Link className="header-link" to="/">
              Home
            </Link>
          </li>
          <li className="header-item">
            <Link className="header-link" to="/posts">
              Posts
            </Link>
          </li>

          <li className="header-item">
            <Link className="header-link" to="/profiles">
              Profiles
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
