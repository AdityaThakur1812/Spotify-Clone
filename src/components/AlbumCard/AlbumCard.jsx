import "./AlbumCard.css";

function AlbumCard({album}){
    return(
        <div className="album-card">
            <img src={album.cover} alt="album.title" className="album-cover"/>
            <h3>{album.title}</h3>
            <p>{album.artist}</p>
        </div>
    )
}

export default AlbumCard;