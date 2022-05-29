import './App.css';
import { useState } from 'react';
import Debounce from './components/debounce';
import Movies from './components/Movies';

const API_KEY = 'd4f42ac06c2fc5dfa64720201a53ec39';
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=`;

function App() {
  const [movies, setmovies] = useState([]);

  function Buscador(e) {
    const query = e.target.value || 'batman';

    fetch(`${URL}${query}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setmovies(data.results);
      })
      .catch(err => console.log('Solicitud fallida', err));
  }

  return (
    <div className=''>
      <h1 className='mb-4 text-center'>Buscador de peliculas</h1>
      <label htmlFor='' className='flex justify-center'>
        <input
          onChange={Debounce(Buscador, 700)}
          className='self-center text-center border-2 border-purple-600 rounded-lg'
          type='text'
          placeholder='buscar peliculas...'
        />
      </label>
      <div className='container bg-slate-500 mx-auto'>
        {movies.length > 0 &&
          movies.map(movie => <Movies key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
