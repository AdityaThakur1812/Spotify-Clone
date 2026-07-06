import "./Home.css";
import albums from "../../data/albums";
import AlbumCard from "../../components/AlbumCard/AlbumCard";

function Home(){
    return(
        <div className="home">
            <h1>Good Evening</h1>
            <section>
                <h2>Made for You</h2>
                <div className="albums-grid">
                    {albums.map((album)=>(
                        <AlbumCard key ={album.id} album ={album}/>
                    ))}
                </div>
            </section>
        </div>

    )
}
export default Home;