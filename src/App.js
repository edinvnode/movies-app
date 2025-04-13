import data from './data';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [movie, setMovie] = useState('');
  const [sortedMovies, setSortedMovies] = useState(data);

  //console.log(data);

  const handleMovie = (e) => {
    setMovie(e.target.value);
    //alert(movie);
  };

  const handleSort = () => {
    const sorted = [...sortedMovies].sort(
      (a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating)
    );
    setSortedMovies(sorted);
  };

  return (
    <div className="App">
      <h1>Movies App</h1>
      <div className="input-card">
        <input
          typeof="text"
          className="movie-input"
          placeholder="Enter a movie name"
          value={movie}
          onChange={handleMovie}
        />
        <button onClick={handleSort} className="sort-button">
          Sort by imDB rating
        </button>
      </div>
      <div className="container">
        {sortedMovies
          .filter((item) =>
            item.title.toLowerCase().includes(movie.toLowerCase())
          )
          .map((item) => (
            <Card
              title={item.title}
              year={item.year}
              image={item.cover}
              imdbRating={item.imdbRating}
              genre={item.genre}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
