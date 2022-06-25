import { API_IMAGE_LANDSCAPE_HOST } from '../constants/api';

const MovieCard = ({ title, image, year, rating }) => {
	return (
		<div className='w-1/4 p-4'>
			<div>
				<img
					className='w-full'
					src={`${API_IMAGE_LANDSCAPE_HOST}${image}`}
					alt=''
				/>
				<h3>{title}</h3>
				<span>{rating}</span>
				<span>{year}</span>
			</div>
		</div>
	);
};

export default MovieCard;
