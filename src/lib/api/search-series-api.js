import axios from 'axios';
import { API_TOP_SERIES } from '../../constants/api';
import { serieApiMapper } from '../mappers/serie-api-mapper';

export const searchSeriesApi = async () => {
	const endpoint = `${API_TOP_SERIES}${import.meta.env.VITE_API_KEY}`;
	try {
		const response = await axios.get(endpoint);
		if (response.status === 200) {
			const { results: series, total_results: totalPages } =
				await response.data;
			return {
				success: true,
				data: {
					series: series.map((movie) => serieApiMapper(movie)),
					totalPages,
				},
			};
		}
		return { success: false, statusCode: response.status };
	} catch (error) {
		return { success: false, statusCode: 500 };
	}
};
