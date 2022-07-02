const MovieCard = ({
	title,
	description,
	image,
	landscapeImage,
	year,
	rating,
	setPreviewMovie,
}) => {
	return (
		<div className='w-1/4 p-4'>
			<div
				onClick={() => {
					setPreviewMovie({
						title,
						description,
						image,
						landscapeImage,
						year,
						rating,
					});
				}}
				style={{ backgroundImage: `url(${image})` }}
				className='aspect-2/3 bg-cover p-2 relative bg-slate-500 hover:scale-110'>
				<div className='flex justify-between'>
					<span className='bg-netflix-primary rounded-full p-1 text-sm'>
						{rating}
					</span>
					<span className='bg-netflix-primary py-1 px-2 text-sm'>{year}</span>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
