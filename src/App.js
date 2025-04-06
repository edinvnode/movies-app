import data from './data';
import Card from './components/Card';

function App() {
  console.log(data);
  return (
    <div className="App">
      <h1>Movies App</h1>
      <div className="container">
        {data.map((item) => (
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
