import "./Home.css";
import albums from "../../data/albums";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import playlists from "../../data/playlists";

function Home() {
  return (
    <div className="home">
      <h1>Good Evening</h1>
      <section>
        <h2>Made for You</h2>
        <div className="playlists-grid">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} play={playlist} />
          ))}
        </div>
      </section>
      <section>
        <h2>Popular Albums</h2>
        <div className="albums-grid">
          {albums.map((album) => {
             return <AlbumCard key={album.id} album={album} />;
          })}
        </div>
      </section>
    </div>
  );
}
export default Home;
