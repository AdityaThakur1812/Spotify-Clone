
import { useParams } from "react-router-dom";
import albums from "../../data/albums";
import tracks from "../../data/tracks";
import SongRow from "../../components/SongRow/SongRow";
import "./Album.css";

function Album() {
  const { id } = useParams();
  const album = albums.find((item) => item.id === Number(id));

  if (!album) {
    return <h1>Album not found</h1>;
  }

  const albumTracks = tracks.filter(
    (track) => track.albumId === album.id
  );

  return (
    <div className="album-page">
      <div className="album-header">
        <img src={album.cover} alt={album.title} />
        <div>
          <p>Album</p>
          <h1>{album.title}</h1>
          <h3>{album.artist}</h3>
        </div>
      </div>

      <div className="album-tracks">
        {albumTracks.map((song, index) => (
          <SongRow
            key={song.id}
            song={song}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Album;
