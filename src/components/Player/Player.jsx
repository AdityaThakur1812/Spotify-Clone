import "./Player.css";

function Player() {
  return (
    <div className="player-container">

      <div>
        <h4>No Song Playing</h4>
      </div>

      <div className="controls">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>
      </div>

      <div>
        Volume
      </div>

    </div>
  );
}

export default Player;