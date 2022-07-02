const MoviePreview = ({
	title,
	description,
	image,
	landscapeImage,
	year,
	rating,
	genres,
}) => {
	console.log(genres);

	return (
		<div className='w-full'>
			<img className='w-full' src={landscapeImage} alt='' />
			<h1 className='text-xl font-bold my-6'>{title}</h1>
			<div className='mb-4'>
				<span className='py-1 px-2 bg-primary mr-4'>{rating || '-'}</span>
				<span className='py-1 px-2 bg-bg-700'>{year}</span>
				<span className='ml-4'></span>
				{genres.join(', ')}
			</div>
			<p>{description}</p>
		</div>
	);
};

export default MoviePreview;
