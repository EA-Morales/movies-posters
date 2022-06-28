import axios from 'axios';
import { API_TOP_MOVIES, API_SEARCH_MOVIE } from '../../constants/api';
import { movieApiMapper } from '../mappers/movie-api-mapper';

export const searchMoviesApi = async (search, page) => {
	const endpoint = search
		? `${API_SEARCH_MOVIE}api_key=${
				import.meta.env.VITE_API_KEY
		  }&query=${search}&page=${page}`
		: `${API_TOP_MOVIES}${import.meta.env.VITE_API_KEY}&page=${page}`;

	try {
		const response = await axios.get(endpoint);

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
};
