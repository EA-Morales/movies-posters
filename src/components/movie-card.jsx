const MovieCard = ({ title, image, year, rating }) => {
	return (
		<div className='w-1/4 p-4'>
			<div>
				<img className='w-full' src={image} alt='' />
				<h3>{title}</h3>
				<div className='flex justify-between'>
					<span>{rating}</span>
					<span>{year}</span>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
