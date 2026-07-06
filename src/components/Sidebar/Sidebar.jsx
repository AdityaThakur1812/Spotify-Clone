import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <h2>Spotify Clone</h2>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/library">Library</NavLink>
      </nav>

    </div>
  );
}

export default Sidebar;