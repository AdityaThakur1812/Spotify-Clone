import { Routes ,Route} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Home from "./pages/Home";

function App(){
    return(
        <>
        <Routes>
            <Route path ="/" element ={<Layout/>}>
            <Route index element ={<Home/>}/>
            <Route path = "/library" element = {<Library/>}/>
            <Route path ="/search" element={<Search/>}/>
            </Route>
        </Routes>
        </>
    )
}
export default App;