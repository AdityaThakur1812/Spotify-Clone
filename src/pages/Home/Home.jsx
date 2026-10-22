import "./Home.css";
import albums from "../../data/albums";
import AlbumCard from "../../components/AlbumCard/AlbumCard";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import playlists from "../../data/playlists";
import tracks from "../../data/tracks";
import SongRow from "../../components/SongRow/SongRow";

function Home() {
  return (
    <div className="home">
      <h1>Good Evening</h1>
      <section>
        <h2>Made for You</h2>
        <div className="playlists-grid">
          {playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
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
      <section>
        <h2>Recently Played</h2>

        <div>
          {tracks.map((song, index) => (
            <SongRow key={song.id} song={song} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;
