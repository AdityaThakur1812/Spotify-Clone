import "./PlaylistCard.css";

function PlaylistCard({play}){
    return(
        <div className="playlist-card">
            <img src={play.cover} alt={play.title} className="playlist-cover" />
            <h3>{play.title}</h3>
            <p>{play.description}</p>
        </div>
    );
}
export default PlaylistCard;