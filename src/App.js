import data from './data';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [movie, setMovie] = useState('');

  //console.log(data);

  const handleMovie = (e) => {
    setMovie(e.target.value);
    //alert(movie);
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
      <div className="container">
        {data
          .filter((item) =>
            item.title.toLowerCase().includes(movie.toLowerCase())
          )
          .map((item) => (
            <Card
              title={item.title}
              year={item.year}
              image={item.cover}
              imdbRating={item.imdbRating}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
