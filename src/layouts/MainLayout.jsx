import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Player from "../components/Player/Player";

import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">

      <aside className="sidebar">
        <Sidebar />
      </aside>

      <div className="content">
        <Navbar />
        <main className="main">
          <Outlet />
        </main>
      </div>

      <footer className="player">
        <Player />
      </footer>

    </div>
  );
}

export default MainLayout;