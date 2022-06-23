import { API_IMAGE_PORTRAIT_HOST } from '../../constants/api';

const Card = ({ title, image, overview, year, rating, onClick }) => {
	const background = `${API_IMAGE_PORTRAIT_HOST}${image}`;

	console.log(background);

	return (
		<div className='w-96 h-min cursor-pointer hover:scale-105 transition-transform border-2'>
			<div className='w-full h-48 aspect-2/3 bg-cyan-100 bg-cover bg-gray rounded-t-2xl'></div>
			<h2 className='text-2xl'>{title}</h2>
			<p>{overview}</p>
			<span className=' py-1 px-2 bg-primary'>{rating || '-'}</span>
			<span className='py-1 px-2 bg-bg-700'>{year}</span>
		</div>
	);
};

export default Card;
