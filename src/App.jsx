import './App.css';
import MoviesGrid from './components/MoviesGrid/MoviesGrid';

function App() {
	return (
		<div className='container mx-auto'>
			<h1 className='text-red-300 text-center'>Movie Database</h1>

			<MoviesGrid />
		</div>
	);
}

export default App;
