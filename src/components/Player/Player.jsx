import "./Player.css";

function Player() {
  return (
    <div className="player-container">
      <div className="player-left">
        <div className="album-art"></div>
        <div>
          <h4>No song</h4>
          <p>Select a song</p>
        </div>
      </div>
      <div className="player-center">
        <button>⏮</button>
        <button>▶</button>
        <button>⏭</button>
      </div>
      <div className="player-right">
        Volume
      </div>
    </div>
  );
}
export default Player;
