import { useMoviesSearch } from './lib/hooks/useMoviesSearch';
import './styles/App.css';

function App() {
	const { movies, page, loading, error, setPage } = useMoviesSearch();

	if (loading) return <div>Loading...</div>;

	if (error) return <div>{error}</div>;

	return (
		<div className='container mx-auto'>
			<div className='flex gap-4'>
				<button onClick={() => setPage(page + -1)}>{page} page</button>
				<button onClick={() => setPage(page + 1)}>page {page}</button>
			</div>
			{movies && movies.map(movie => <p key={movie.id}>{movie.title}</p>)}
		</div>
	);
}

export default App;
