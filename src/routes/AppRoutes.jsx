
import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Library from "../pages/Library/Library";
import Album from "../pages/Album/Album";
import Playlist from "../pages/Playlist/Playlist";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/album/:id" element={<Album />} />
        <Route path="/playlist/:id" element={<Playlist />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
