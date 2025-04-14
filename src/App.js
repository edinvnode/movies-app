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

  const sortByRating = () => {
    const sorted = [...sortedMovies].sort(
      (a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating)
    );
    setSortedMovies(sorted);
  };

  // 🔠 Sort by Title (A-Z)
  const sortByTitle = () => {
    const sorted = [...sortedMovies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedMovies(sorted);
  };

  // 📅 Sort by Year (Descending)
  const sortByYear = () => {
    const sorted = [...sortedMovies].sort((a, b) => b.year - a.year);
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
      </div>

      <div className="sort-buttons">
        <button onClick={sortByRating} className="sort-rating">
          Sort by imDB rating
        </button>
        <button onClick={sortByTitle} className="sort-title">
          Sort by Title
        </button>
        <button onClick={sortByYear} className="sort-year">
          Sort by Year
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
