import axios from 'axios';
import { API_TOP_SERIES } from '../../constants/api';

export const searchSeriesApi = async () => {
	const endpoint = `${API_TOP_SERIES}${import.meta.env.VITE_API_KEY}`;
	try {
		const response = await axios.get(endpoint);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
};
