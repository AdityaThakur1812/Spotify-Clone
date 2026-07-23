import "./SongRow.css";
function SongRow({ song, index }) {
  return (
    <div className="song-row">
      <span className="song-index">{index + 1}</span>
      <img src={song.cover} alt={song.title} className="song-cover" />
      <div className="song-info">
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
      </div>
      <span className="song-duration">{song.duration}</span>
    </div>
  );
}
export default SongRow;
