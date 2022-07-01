const Pagination = ({ page, totalPages, setPage }) => {
	const isBackDisable = page === 1;
	const isNextDisable = page === totalPages;

	return (
		<div className='flex gap-2'>
			<button disabled={isBackDisable} onClick={() => setPage(page - 1)}>
				&lt;
			</button>
			<span>
				Pagina {page} de {totalPages}
			</span>
			<button disabled={isNextDisable} onClick={() => setPage(page + 1)}>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
