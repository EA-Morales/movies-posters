import { useEffect, useState } from 'react';
import { searchTrendingMovies } from './lib/api/search-trending-movies';
import './styles/App.css';

function App() {
	const { movies, page, loading, error, setpage } = useMovies();

	if (loading) return <div>Loading...</div>;

	if (error) return <div>{error}</div>;

	return (
		<div className='container mx-auto'>
			<div className='flex gap-4'>
				<button onClick={() => setpage(page + -1)}>{page} page</button>
				<button onClick={() => setpage(page + 1)}>page {page}</button>
			</div>
			{movies && movies.map(movie => <p key={movie.id}>{movie.title}</p>)}
		</div>
	);
}

const searchTrending = async (page, setmovies, setError, setLoading) => {
	setLoading(true);
	const { success, data, statusCode } = await searchTrendingMovies(page);

	if (success) setmovies(data.movies);
	else {
		setmovies();
		setError('Error: ' + statusCode);
	}
	setLoading(false);
};

const useMovies = () => {
	const [movies, setmovies] = useState([]);
	const [page, setpage] = useState(1);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		searchTrending(page, setmovies, setError, setLoading);
	}, [page]);

	return { movies, page, loading, error, setpage };
};

export default App;
