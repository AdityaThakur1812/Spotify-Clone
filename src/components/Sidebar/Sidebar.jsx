import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="logo">Spotify Clone</div>
      <nav>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/search"> Search</NavLink>
        <NavLink to="/library">Your Library</NavLink>
      </nav>
      <div className="playlist-section">
        <h4>Playlists</h4>
        <p>Liked Songs</p>
        <p>Recently Played</p>
      </div>
    </div>
  );
}
export default Sidebar;
