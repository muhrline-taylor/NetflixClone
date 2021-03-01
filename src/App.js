import './App.css';
import Row from "./views/Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      
      <Nav />
      
      <Banner />

    {/* ENDED AT 2:45:05 Row.js -> opts.playerVars: {link} */}


      {/* CATEGORIES */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ACTION" fetchUrl={requests.fetchActionMovies}/>
      <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
      {/* END CATEGORIES */}
    </div>
  );
}

export default App;
