import { useReducer, useEffect } from 'react';
import { searchMoviesApi } from '../api/search-movies-api';
import { searchSeriesApi } from '../api/search-series-api';
import {
	moviesSearchReducer,
	MOVIES_SEARCH_ACTIONS,
	MOVIES_SEARCH_INITIAL_STATE,
} from '../reducers/movies-search.reducer';

const searchTrending = async (
	search,
	page,
	startSearch,
	searchSuccess,
	searchError
) => {
	startSearch();

	const { success, data, statusCode } = await searchMoviesApi(search, page);
	const series = await searchSeriesApi();

	console.log(series.data);

	if (success) searchSuccess(data.movies, data.totalPages);
	else searchError(statusCode);
};

export const useMoviesSearch = () => {
	const [moviesSearch, setMoviesSearch] = useReducer(
		moviesSearchReducer,
		MOVIES_SEARCH_INITIAL_STATE
	);

	const startSearch = () =>
		setMoviesSearch({ type: MOVIES_SEARCH_ACTIONS.START_SEARCH });

	const searchSuccess = (movies, totalPages) =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_SUCCESS,
			movies,
			totalPages,
		});

	const searchError = (error) =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_ERROR,
			error,
		});

	const setSearchTerm = (searchTerm) =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SET_SEARCH_TERM,
			searchTerm,
		});

	const setPage = (page) =>
		setMoviesSearch({ type: MOVIES_SEARCH_ACTIONS.SET_PAGE, page });

	useEffect(() => {
		// TODO - REFACTOR THIS TIMEOUT - must be a debounce function

		const timeOutSearch = setTimeout(() => {
			searchTrending(
				moviesSearch.searchTerm,
				moviesSearch.page,
				startSearch,
				searchSuccess,
				searchError
			);
		}, 500);

		return () => clearTimeout(timeOutSearch);
	}, [moviesSearch.searchTerm, moviesSearch.page]);

	return { ...moviesSearch, setSearchTerm, setPage };
};
