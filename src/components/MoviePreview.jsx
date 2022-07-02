const MoviePreview = ({
	title,
	description,
	image,
	landscapeImage,
	year,
	rating,
}) => {
	return (
		<div>
			<img className='w-full' src={landscapeImage} alt='' />
			<h1 className='text-xl font-bold my-6'>{title}</h1>
			<div className='mb-4'>
				<span className='py-1 px-2 bg-primary mr-4'>{rating || '-'}</span>
				<span className='py-1 px-2 bg-bg-700'>{year}</span>
			</div>
			<p>{description}</p>
		</div>
	);
};

export default MoviePreview;
