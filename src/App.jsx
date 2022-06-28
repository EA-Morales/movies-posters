import MoviesGrid from './components/movies-grid';
import { useMoviesSearch } from './lib/hooks/useMoviesSearch';
import './styles/App.css';

function App() {
	const { movies, searchTerm, page, loading, error, setSearchTerm, setPage } =
		useMoviesSearch();

	return (
		<div className='container mx-auto'>
			<div className='flex justify-center'>
				<input
					className=''
					value={searchTerm}
					onChange={event => setSearchTerm(event.target.value)}
					type='text'
					placeholder='Search movie...'
				/>
				<div className='flex gap-4 '>
					<button onClick={() => setPage(page + -1)}>{page} page</button>
					<button onClick={() => setPage(page + 1)}>page {page}</button>
				</div>
			</div>
			<MoviesGrid movies={movies} loading={loading} error={error} />
		</div>
	);
}

export default App;
