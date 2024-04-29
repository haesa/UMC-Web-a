import './App.css';
import Movie from './components/Movie';
import data from './data/movies.json';

function App() {
  const movies = data.results;

  return (
    <div className='movies'>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default App;
