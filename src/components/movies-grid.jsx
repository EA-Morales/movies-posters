import MovieCard from './movie-card';

const MoviesGrid = ({ movies, loading, error, setPreviewMovie }) => {
	if (loading) return <div>Loading...</div>;

	if (error) return <div>{error}</div>;
	return (
		<div className='flex flex-wrap'>
			{movies &&
				movies.map(movie => (
					<MovieCard
						key={movie.id}
						title={movie.title}
						description={movie.description}
						image={movie.image}
						landscapeImage={movie.landscapeImage}
						year={movie.year}
						rating={movie.rating}
						setPreviewMovie={setPreviewMovie}
					/>
				))}
		</div>
	);
};

export default MoviesGrid;
