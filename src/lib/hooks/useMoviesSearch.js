import { useReducer, useEffect } from 'react';
import { searchMoviesApi } from '../api/search-movies-api';
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

	if (success) searchSuccess(data.movies);
	else searchError(statusCode);
};

export const useMoviesSearch = search => {
	// console.log(search);

	const [moviesSearch, setMoviesSearch] = useReducer(
		moviesSearchReducer,
		MOVIES_SEARCH_INITIAL_STATE
	);

	const startSearch = () =>
		setMoviesSearch({ type: MOVIES_SEARCH_ACTIONS.START_SEARCH });

	const searchSuccess = movies =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_SUCCESS,
			movies,
		});

	const searchError = error =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_ERROR,
			error,
		});

	const setPage = page =>
		setMoviesSearch({ type: MOVIES_SEARCH_ACTIONS.SET_PAGE, page });

	useEffect(() => {
		searchTrending(
			search,
			moviesSearch.page,
			startSearch,
			searchSuccess,
			searchError
		);
	}, [search, moviesSearch.page]);

	return { ...moviesSearch, setPage };
};
