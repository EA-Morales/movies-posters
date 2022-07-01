import { useState } from 'react';
import Modal from '../components/Modal';
import MoviePreview from '../components/MoviePreview';
import MoviesGrid from '../components/movies-grid';
import Pagination from '../components/Pagination';
import { useMoviesSearch } from '../lib/hooks/useMoviesSearch';

const HomePage = () => {
	const [previewMovie, setPreviewMovie] = useState();
	const {
		movies,
		totalPages,
		searchTerm,
		page,
		loading,
		error,
		setSearchTerm,
		setPage,
	} = useMoviesSearch();

	return (
		<div className='container mx-auto'>
			<div className='flex justify-between px-4 mt-4'>
				<input
					className='text-black p-1 italic rounded-lg'
					value={searchTerm}
					onChange={event => setSearchTerm(event.target.value)}
					type='text'
					placeholder='Search movie...'
				/>
				<div className='flex gap-4 '>
					<Pagination page={page} setPage={setPage} totalPages={totalPages} />
				</div>
			</div>
			<MoviesGrid
				movies={movies}
				loading={loading}
				error={error}
				setPreviewMovie={setPreviewMovie}
			/>
			{previewMovie && (
				<Modal closeModal={() => setPreviewMovie()}>
					<MoviePreview {...previewMovie} />
				</Modal>
			)}
		</div>
	);
};

export default HomePage;
