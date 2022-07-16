import {
	API_IMAGE_LANDSCAPE_HOST,
	API_IMAGE_PORTRAIT_HOST,
} from '../../constants/api';

export const serieApiMapper = (serieApiObject) => ({
	id: serieApiObject.id,
	title: serieApiObject.name,
	description: serieApiObject.description,
	image: `${API_IMAGE_PORTRAIT_HOST}${serieApiObject.poster_path}`,
	landscapeimage: `${API_IMAGE_LANDSCAPE_HOST}${serieApiObject.backdrop_path}`,
	year: new Date(serieApiObject.first_air_date).getFullYear(),
	rating: serieApiObject.vote_average,
});
