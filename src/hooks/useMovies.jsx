import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_TOP_MOVIES } from '../constants/api';

const useMovies = () => {
	const [movies, setmovies] = useState([]);

	const URL = `${API_TOP_MOVIES}${import.meta.env.VITE_API_KEY}`;

	useEffect(() => {
		axios
			.get(URL)
			.then(res => {
				setmovies(res.data.results);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return { movies };
};

export default useMovies;
