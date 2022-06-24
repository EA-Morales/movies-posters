import axios from 'axios';
import { API_TOP_MOVIES } from '../../constants/api';

export const searchTrendingMovies = async page => {
	try {
		const response = await axios.get(
			`${API_TOP_MOVIES}${import.meta.env.VITE_API_KEY}&page=${page}`
		);

		if (response.status === 200) {
			const { results: movies, total_results: totalPages } =
				await response.data;
			return {
				success: true,
				data: { movies, totalPages },
			};
		}
		return { success: false, statusCode: response.status };
	} catch (error) {
		return { success: false, statusCode: 500 };
	}
};
