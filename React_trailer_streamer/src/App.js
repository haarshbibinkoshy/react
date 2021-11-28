import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { originals, action ,comedyMovies,horrorMovies,romanceMovies,Adventure,Animation,crime,fantasy,scienceFiction,thriller} from "./urls";

function App() {
  return (
    <div >
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='NETFLIX ORIGINALS'/>
     <RowPost url={action} title='Action' isSmall/>
     <RowPost url={comedyMovies} title='Comedy' isSmall/>
     <RowPost url={horrorMovies} title='Horror' isSmall/>
     <RowPost url={romanceMovies} title='Romance' isSmall/>

     <RowPost url={Adventure} title='Adventure' isSmall/>
     <RowPost url={Animation} title='Animation' isSmall/>
     <RowPost url={crime} title='Crime' isSmall/>
     <RowPost url={fantasy} title='Fantasy' isSmall/>
     <RowPost url={scienceFiction} title='Science Fiction' isSmall/>
     <RowPost url={thriller} title='Thriller' isSmall/>
     
    </div>
  );
}

export default App;
