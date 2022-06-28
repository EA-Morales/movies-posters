import axios from 'axios';
import { API_TOP_MOVIES, API_SEARCH_MOVIE } from '../../constants/api';
import { movieApiMapper } from '../mappers/movie-api-mapper';

export const searchTrendingMovies = async page => {
	const query = '';

	if (query === '') {
		try {
			const response = await axios.get(
				`${API_TOP_MOVIES}${import.meta.env.VITE_API_KEY}&page=${page}`
			);

			if (response.status === 200) {
				const { results: movies, total_results: totalPages } =
					await response.data;
				return {
					success: true,
					data: {
						movies: movies.map(movie => movieApiMapper(movie)),
						totalPages,
					},
				};
			}
			return { success: false, statusCode: response.status };
		} catch (error) {
			return { success: false, statusCode: 500 };
		}
	} else {
		try {
			const response = await axios.get(
				`${API_SEARCH_MOVIE}api_key=${
					import.meta.env.VITE_API_KEY
				}&query=${query}&page=${page}`
			);

			if (response.status === 200) {
				const { results: movies, total_results: totalPages } =
					await response.data;
				return {
					success: true,
					data: {
						movies: movies.map(movie => movieApiMapper(movie)),
						totalPages,
					},
				};
			}
			return { success: false, statusCode: response.status };
		} catch (error) {
			return { success: false, statusCode: 500 };
		}
	}
};
