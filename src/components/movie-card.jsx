const MovieCard = ({ title, image, year, rating }) => {
	return (
		<div className='w-1/4 p-4'>
			<div
				style={{ backgroundImage: `url(${image})` }}
				className='aspect-2/3 bg-cover p-2 relative bg-slate-500'>
				<h3 className='absolute bottom-0'>{title}</h3>
				<div className='flex justify-between'>
					<span>{rating}</span>
					<span>{year}</span>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
