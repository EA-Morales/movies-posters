const MovieTest = ({
	title,
	description,
	image,
	landscapeImage,
	year,
	rating,
	genres,
}) => {
	return (
		<div className='w-1/6 inline-block relative p-2'>
			<img className='w-full h-auto block' src={image} alt={title} />
			<div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
				<p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
					{title}
				</p>
			</div>
		</div>
	);
};

export default MovieTest;
