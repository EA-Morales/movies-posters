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
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default MoviePreview;
