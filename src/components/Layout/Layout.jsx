import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Player from "../Player/Player";
import "./Layout.css"

function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="player">
        <Player />
      </footer>
    </div>
  );
}
export default Layout;
