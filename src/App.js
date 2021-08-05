import './App.css';
import Row from './components/Rows/Row';
import requests from './components/contants/requests';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
      <Row 
        title="Meddoraa Originals" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Moviews" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Moviews" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Moviews" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Cosumentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
