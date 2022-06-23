import useMovies from '../../hooks/useMovies';
import Card from '../Card/Card';

const MoviesGrid = () => {
	const { movies } = useMovies();

	return (
		<div className='flex flex-wrap justify-center gap-2'>
			{movies &&
				movies.map(movie => (
					<Card
						key={movie.id}
						image={movie.backdrop_path}
						title={movie.title}
						overview={movie.overview}
						year={movie.release_date}
						rating={movie.vote_average}
					/>
				))}
		</div>
	);
};

export default MoviesGrid;
