import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
const Navbar = () => {
  const{ theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <button onClick={toggleTheme}>{theme}</button>
      </nav>
    </>
  );
};
export default Navbar;
