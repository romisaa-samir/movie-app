import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import SingleMovie from "./moviespage/SingleMovie";
import TvShows from "./pages/TvShows";
import SingleTv from "./moviespage/SingleTv";
import Celeberties from "./pages/Celebrities";
import SingleCelebirty from "./moviespage/SingleCelebirty";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route exact path="/movies/:id" element={<SingleMovie />} />
          <Route exact path="/tvShows" element={<TvShows />} />
          <Route exact path="/tvShows/:id" element={<SingleTv />} />
          <Route exact path="/celeberties" element={<Celeberties />} />
          <Route exact path="/celeberties/:id" element={<SingleCelebirty />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
