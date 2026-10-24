import "./SongRow.css";
import useAudio from "../../hooks/useAudio";
function SongRow({ song, index }) {
  const { currentTrack, isPlaying, playTrack, togglePlay } = useAudio();
   const isCurrentTrack = currentTrack?.id === song.id;
  const handlePlay = () => {
    if (isCurrentTrack) {
      togglePlay();
    } else {
      playTrack(song);
    }
  };
  return (
    <div className="song-row">
      <button className="song-play-button"
        onClick = {handlePlay}>
        aria-label = {
          isCurrentTrack && isPlaying
            ? `Pause ${song.title}`
            : `Play ${song.title}`
        }
      </button>
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
