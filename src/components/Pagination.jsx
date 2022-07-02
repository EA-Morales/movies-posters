import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';

const Pagination = ({ page, totalPages, setPage }) => {
	const isBackDisable = page === 1;
	const isNextDisable = page === totalPages;

	return (
		<div className='flex items-center gap-2'>
			<button
				className='bg-netflix-primary flex justify-center items-center rounded-full p-1'
				disabled={isBackDisable}
				onClick={() => setPage(page - 1)}>
				<ArrowLeft className='h-4' />
			</button>
			<span>
				Pagina {page} de {totalPages}
			</span>
			<button
				className='bg-netflix-primary flex justify-center items-center rounded-full p-1'
				disabled={isNextDisable}
				onClick={() => setPage(page + 1)}>
				<ArrowRight className='h-4' />
			</button>
		</div>
	);
};

export default Pagination;
