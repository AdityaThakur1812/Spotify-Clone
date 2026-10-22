import { useNavigate } from "react-router-dom";
import "./PlaylistCard.css";

function PlaylistCard({ playlist }) {
  const navigate = useNavigate();

  return (
    <div
      className="playlist-card"
      onClick={() => navigate(`/playlist/${playlist.id}`)}
    >
      <img
        src={playlist.cover}
        alt={playlist.title}
        className="playlist-cover"
      />

      <h3>{playlist.title}</h3>
      <p>{playlist.description}</p>
    </div>
  );
}

export default PlaylistCard;