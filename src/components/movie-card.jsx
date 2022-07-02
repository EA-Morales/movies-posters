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
					<span className='bg-netflix-primary p-1 text-sm absolute top-0 left-0'>
						{rating}
					</span>
					<span className='bg-netflix-background py-1 px-2 text-sm absolute top-0 right-0'>
						{year}
					</span>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
