import MoviesGrid from './components/movies-grid';
import Pagination from './components/Pagination';
import { useMoviesSearch } from './lib/hooks/useMoviesSearch';
import './styles/App.css';

function App() {
	const {
		movies,
		totalPages,
		searchTerm,
		page,
		loading,
		error,
		setSearchTerm,
		setPage,
	} = useMoviesSearch();

	return (
		<div className='container mx-auto'>
			<div className='flex justify-center mt-4'>
				<div className='flex gap-4'>
					<input
						className=''
						value={searchTerm}
						onChange={event => setSearchTerm(event.target.value)}
						type='text'
						placeholder='Search movie...'
					/>
					<div className='flex gap-4 '>
						<Pagination page={page} setPage={setPage} totalPages={totalPages} />
					</div>
				</div>
			</div>
			<MoviesGrid movies={movies} loading={loading} error={error} />
		</div>
	);
}

export default App;
