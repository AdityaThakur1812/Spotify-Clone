import { useParams } from "react-router-dom";
import playlists from "../../data/playlists";
import tracks from "../../data/tracks";
import SongRow from "../../components/SongRow/SongRow";
import "./Playlist.css";

function Playlist() {
  const { id } = useParams();
  const playlistId = Number(id);
  const playlist = playlists.find((item) => item.id === playlistId);
  if (!playlist) {
    return <h1>Playlist not found</h1>;
  }
  const playlistTracks = playlist.trackIds
    .map((trackId) => tracks.find((track) => track.id === trackId))
    .filter(Boolean);

  return (
    <div className="playlist-page">
      <div className="playlist-header">
        <img src={playlist.cover} alt={playlist.title} />
        <div>
          <p>Playlist</p>
          <h1>{playlist.title}</h1>
          <h3>{playlist.description}</h3>
        </div>
      </div>

      <div className="playlist-tracks">
        {playlistTracks.map((song, index) => (
          <SongRow key={song.id} song={song} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
