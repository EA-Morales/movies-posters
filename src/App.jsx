import { useState } from 'react';
import MovieCard from './components/movie-card';
import { useMoviesSearch } from './lib/hooks/useMoviesSearch';
import './styles/App.css';

function App() {
	const [search, setSearch] = useState('');
	const { movies, page, loading, error, setPage } = useMoviesSearch(search);

	console.log(search);

	// TODO - This elements under don't belong this component
	if (loading) return <div>Loading...</div>;

	if (error) return <div>{error}</div>;
	// TODO

	return (
		<div className='container mx-auto'>
			<div className='flex justify-center'>
				<input
					className=''
					value={search}
					onChange={event => setSearch(event.target.value)}
					type='text'
					placeholder='Search movie...'
				/>
				<div className='flex gap-4 '>
					<button onClick={() => setPage(page + -1)}>{page} page</button>
					<button onClick={() => setPage(page + 1)}>page {page}</button>
				</div>
			</div>
			<div className='flex flex-wrap'>
				{movies &&
					movies.map(movie => (
						<MovieCard
							key={movie.id}
							title={movie.title}
							image={movie.image}
							year={movie.year}
							rating={movie.rating}
						/>
					))}
			</div>
		</div>
	);
}

export default App;
